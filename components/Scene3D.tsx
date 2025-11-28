import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { Effects, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { UnrealBloomPass, ShaderPass } from 'three-stdlib';
import { useStore } from '../store';

// --- Type Definitions ---
extend({ UnrealBloomPass, ShaderPass });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      unrealBloomPass: any;
      shaderPass: any;
    }
  }
}

// --- Shaders ---

const particleVertex = `
  uniform float uTime;
  attribute float size;
  attribute float speed;
  attribute float offset;
  varying vec3 vColor;
  
  void main() {
    vColor = color;
    
    // Orbit logic around Y axis
    vec3 pos = position;
    float r = length(pos.xz);
    float angle = atan(pos.z, pos.x) + uTime * speed * 0.1;
    
    vec3 newPos = vec3(
        r * cos(angle),
        pos.y + sin(uTime * speed + offset) * 0.5,
        r * sin(angle)
    );

    vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const particleFragment = `
  varying vec3 vColor;
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
    gl_FragColor = vec4(vColor, alpha * 0.8);
  }
`;

const starVertex = `
  uniform float uTime;
  uniform float uPixelRatio;
  attribute float size;
  attribute float twinkle;
  varying vec3 vColor;
  varying float vTwinkle;
  
  void main() {
    vColor = color;
    vTwinkle = sin(uTime * 2.5 + twinkle) * 0.5 + 0.5;
    
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const starFragment = `
  varying vec3 vColor;
  varying float vTwinkle;
  
  void main() {
    // Simple circular glow for performance (no discard)
    float dist = length(gl_PointCoord - vec2(0.5));
    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
    
    alpha *= (0.2 + vTwinkle * 0.8);
    alpha = pow(alpha, 1.5); // Sharpen the dot
    
    gl_FragColor = vec4(vColor, alpha);
  }
`;

// Reference Disk Shaders
const diskVertex = `
  varying vec2 vUv; varying float vRadius; varying float vAngle;
  void main() {
      vUv = uv; vRadius = length(position.xy); vAngle = atan(position.y, position.x);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const diskFragment = `
  uniform float uTime; uniform vec3 uColorHot; uniform vec3 uColorMid1; uniform vec3 uColorMid2; uniform vec3 uColorOuter;
  uniform float uNoiseScale; uniform float uFlowSpeed; uniform float uDensity;
  varying vec2 vUv; varying float vRadius; varying float vAngle;
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g; vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy;
      i = mod289(i); vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857; vec3 ns = n_ * D.wyz - D.xzx; vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_); vec4 x = x_ * ns.x + ns.yyyy; vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y); vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0) * 2.0 + 1.0; vec4 s1 = floor(b1) * 2.0 + 1.0; vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x); vec3 p1 = vec3(a0.zw, h.y); vec3 p2 = vec3(a1.xy, h.z); vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
      m = m * m; return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }
  void main() {
      float normalizedRadius = smoothstep(1.50, 8.00, vRadius);
      float timeOffset = uTime * uFlowSpeed * (2.0 / (vRadius * 0.3 + 1.0));
      vec2 noiseUv = vec2(vAngle * 2.0 + timeOffset, vRadius * 0.5);
      float noiseVal1 = snoise(vec3(noiseUv * uNoiseScale, uTime * 0.15));
      float noiseVal2 = snoise(vec3(noiseUv * uNoiseScale * 2.0 + 0.8, uTime * 0.22));
      float noiseVal = (noiseVal1 * 0.6 + noiseVal2 * 0.4); noiseVal = (noiseVal + 1.0) * 0.5;
      vec3 color = mix(uColorOuter, uColorMid2, smoothstep(0.0, 0.4, normalizedRadius));
      color = mix(color, uColorMid1, smoothstep(0.3, 0.7, normalizedRadius));
      color = mix(color, uColorHot, smoothstep(0.65, 0.95, normalizedRadius));
      float brightness = pow(1.0 - normalizedRadius, 1.2) * 3.0 + 0.5;
      brightness *= (0.3 + noiseVal * 2.2);
      float radialGrid = 1.0 - (sin(vRadius * 3.0 - uTime * 0.5) * 0.5 + 0.5);
      radialGrid = pow(radialGrid, 4.0); float angleGrid = 1.0 - (sin(vAngle * 20.0) * 0.5 + 0.5);
      angleGrid = pow(angleGrid, 4.0); float grid = 1.0 - clamp(radialGrid + angleGrid, 0.0, 1.0);
      brightness *= (0.7 + grid * 0.8); float alpha = uDensity * (0.2 + noiseVal * 0.9);
      alpha *= smoothstep(0.0, 0.15, normalizedRadius); alpha *= (1.0 - smoothstep(0.85, 1.0, normalizedRadius));
      alpha = clamp(alpha, 0.0, 1.0); gl_FragColor = vec4(color * brightness, alpha);
  }
`;

const eventHorizonFragment = `
  uniform float uTime; uniform vec3 uCameraPosition;
  varying vec3 vNormal; varying vec3 vPosition;
  void main() {
      vec3 viewDirection = normalize(uCameraPosition - vPosition);
      float fresnel = 1.0 - abs(dot(vNormal, viewDirection));
      fresnel = pow(fresnel, 2.0); vec3 glowColor = vec3(0.0, 1.0, 0.8);
      float pulse = sin(uTime * 3.5) * 0.2 + 0.8;
      gl_FragColor = vec4(glowColor * fresnel * pulse, fresnel * 0.5);
  }
`;

const eventHorizonVertex = `
  varying vec3 vNormal; varying vec3 vPosition;
  void main() {
      vNormal = normalize(normalMatrix * normal); vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const lensingVertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const lensingFragment = `
  uniform sampler2D tDiffuse;
  uniform vec2 blackHoleScreenPos;
  uniform float lensingStrength;
  uniform float lensingRadius;
  uniform float aspectRatio;
  uniform float chromaticAberration;
  uniform float scanlineIntensity;
  uniform float vignetteDarkness;
  varying vec2 vUv;
  
  void main() {
    vec2 screenPos = vUv;
    vec2 toCenter = screenPos - blackHoleScreenPos;
    toCenter.x *= aspectRatio;
    
    float dist = length(toCenter);
    float distortionAmount = lensingStrength / (dist * dist + 0.003);
    distortionAmount = clamp(distortionAmount, 0.0, 0.7);
    
    float falloff = smoothstep(lensingRadius, lensingRadius * 0.3, dist);
    distortionAmount *= falloff;
    
    vec2 offset = normalize(toCenter) * distortionAmount;
    offset.x /= aspectRatio;
    
    // Chromatic Aberration
    vec2 distortedUvR = screenPos - offset * (1.0 + chromaticAberration);
    vec2 distortedUvG = screenPos - offset;
    vec2 distortedUvB = screenPos - offset * (1.0 - chromaticAberration);
    
    // Clamp to prevent edge artifacts
    distortedUvR = clamp(distortedUvR, 0.0, 1.0);
    distortedUvG = clamp(distortedUvG, 0.0, 1.0);
    distortedUvB = clamp(distortedUvB, 0.0, 1.0);
    
    float r = texture2D(tDiffuse, distortedUvR).r;
    float g = texture2D(tDiffuse, distortedUvG).g;
    float b = texture2D(tDiffuse, distortedUvB).b;
    
    vec3 finalColor = vec3(r, g, b);
    
    // Scanlines
    float scanline = sin(vUv.y * 800.0) * 0.5 + 0.5;
    finalColor.rgb -= scanline * scanlineIntensity * finalColor.rgb;
    
    // Vignette
    float vignette = length(vUv - vec2(0.5));
    finalColor *= (1.0 - vignette * vignetteDarkness);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const glitchVertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const glitchFragment = `
  uniform sampler2D tDiffuse;
  uniform float uIntensity;
  uniform float uTime;
  varying vec2 vUv;

  float random(vec2 p) {
    return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 uv = vUv;
    vec3 finalColor;

    float r_offset = (random(uv + uTime * 0.4) - 0.5) * 0.05 * uIntensity;
    float g_offset = (random(uv + uTime * 0.6) - 0.5) * 0.05 * uIntensity;

    vec2 uvR = uv + vec2(r_offset, 0.0);
    vec2 uvG = uv + vec2(g_offset, 0.0);
    vec2 uvB = uv;

    float r = texture2D(tDiffuse, uvR).r;
    float g = texture2D(tDiffuse, uvG).g;
    float b = texture2D(tDiffuse, uvB).b;
    
    finalColor = vec3(r, g, b);

    // Glitch bars
    float line_y = floor(uv.y * 50.0 + uTime * 20.0);
    float line_shift = (random(vec2(line_y, uTime)) - 0.5) * 0.1 * uIntensity;

    if (random(vec2(line_y, uTime * 2.0)) > 0.97 - (uIntensity * 0.3)) {
      finalColor = texture2D(tDiffuse, vec2(uv.x + line_shift, uv.y)).rgb;
    }

    vec3 originalColor = texture2D(tDiffuse, vUv).rgb;
    gl_FragColor = vec4(mix(originalColor, finalColor, uIntensity), 1.0);
  }
`;


// --- Scene Components ---

const ParticleSystem = () => {
  // Reduced particle count from 2000 to 600 for a cleaner look
  const count = 600;
  const mesh = useRef<THREE.Points>(null!);
  
  const [positions, colors, sizes, speeds, offsets] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const sp = new Float32Array(count);
    const off = new Float32Array(count);

    const palette = [
      new THREE.Color(0x00ffff), 
      new THREE.Color(0xff00ff),
      new THREE.Color(0x4444ff)
    ];

    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 3 + Math.random() * 10;
        const height = (Math.random() - 0.5) * 4;

        pos[i * 3] = radius * Math.cos(angle);
        pos[i * 3 + 1] = height;
        pos[i * 3 + 2] = radius * Math.sin(angle);

        const color = palette[Math.floor(Math.random() * palette.length)];
        col[i * 3] = color.r;
        col[i * 3 + 1] = color.g;
        col[i * 3 + 2] = color.b;

        sz[i] = Math.random() * 2 + 0.5;
        sp[i] = (Math.random() * 0.5 + 0.2) * (Math.random() < 0.5 ? 1 : -1);
        off[i] = Math.random() * 100;
    }
    return [pos, col, sz, sp, off];
  }, []);

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame((state) => {
      if (mesh.current) {
          (mesh.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.elapsedTime;
      }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
        <bufferAttribute attach="attributes-speed" count={count} array={speeds} itemSize={1} />
        <bufferAttribute attach="attributes-offset" count={count} array={offsets} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial 
        vertexShader={particleVertex}
        fragmentShader={particleFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
      />
    </points>
  );
};

const OptimizedStars = () => {
  const points = useRef<THREE.Points>(null!);
  const count = 10000; 
  
  const [positions, colors, sizes, twinkles] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const tw = new Float32Array(count);
    
    // Cyberpunk Palette
    const palette = [
      new THREE.Color(0x00ffff), 
      new THREE.Color(0xff00ff),
      new THREE.Color(0x8A2BE2), 
      new THREE.Color(0x00ff7f),
      new THREE.Color(0xccddff),
    ];

    const starFieldRadius = 1800;
    
    for(let i=0; i<count; i++) {
        const i3 = i * 3;
        // Distribute evenly on sphere surface
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        const radius = Math.cbrt(Math.random()) * starFieldRadius + 200;

        pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
        pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        pos[i3 + 2] = radius * Math.cos(phi);

        const starColor = palette[Math.floor(Math.random() * palette.length)].clone();
        starColor.multiplyScalar(Math.random() * 0.7 + 0.3);
        
        col[i3] = starColor.r;
        col[i3+1] = starColor.g;
        col[i3+2] = starColor.b;
        
        sz[i] = THREE.MathUtils.randFloat(1.5, 4.0);
        tw[i] = Math.random() * Math.PI * 2;
    }
    return [pos, col, sz, tw];
  }, []);

  const uniforms = useMemo(() => ({ 
      uTime: { value: 0 },
      uPixelRatio: { value: 1 } 
  }), []);

  useFrame((state) => {
    if (points.current) {
      // Rotate the entire starfield slowly (matching reference speed 0.003)
      points.current.rotation.y = state.clock.elapsedTime * 0.003;
      (points.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.elapsedTime;
      (points.current.material as THREE.ShaderMaterial).uniforms.uPixelRatio.value = state.gl.getPixelRatio();
    }
  });

  return (
    <points ref={points} frustumCulled={false} renderOrder={-1}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
        <bufferAttribute attach="attributes-twinkle" count={count} array={twinkles} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial 
        vertexShader={starVertex} 
        fragmentShader={starFragment}
        uniforms={uniforms}
        transparent
        vertexColors
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const BlackHoleObject = () => {
  const diskRef = useRef<THREE.Mesh>(null!);
  const horizonRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const { camera, viewport } = useThree();
  const { isLoading } = useStore();

  const diskUniforms = useMemo(() => ({ 
      uTime: { value: 0 },
      // Changed uColorHot from white to a light cyan/blue to reduce harsh whiteness
      uColorHot: { value: new THREE.Color(0xe0ffff) }, 
      uColorMid1: { value: new THREE.Color(0xff00ff) },
      uColorMid2: { value: new THREE.Color(0x00ffff) },
      uColorOuter: { value: new THREE.Color(0x3939f5) },
      uNoiseScale: { value: 3.5 },
      uFlowSpeed: { value: 0.25 },
      uDensity: { value: 1.5 }
  }), []);

  const horizonUniforms = useMemo(() => ({
      uTime: { value: 0 },
      uCameraPosition: { value: new THREE.Vector3() }
  }), []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (diskRef.current) {
      (diskRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = t;
      // Rotate Disk on Z axis as per reference
      diskRef.current.rotation.z = t * 0.005;
    }
    if (horizonRef.current) {
      (horizonRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = t;
      (horizonRef.current.material as THREE.ShaderMaterial).uniforms.uCameraPosition.value.copy(camera.position);
    }
    
    // Intro Animation: Scale up black hole when loading
    if (groupRef.current) {
        if (isLoading) {
             const scaleProgress = THREE.MathUtils.clamp(t * 0.8, 0, 1);
             const easedScale = scaleProgress * (2 - scaleProgress); // Ease out
             groupRef.current.scale.setScalar(easedScale * (viewport.width < 5 ? 0.55 : 1.0));
        } else {
             // Final settle scale
             const targetScale = viewport.width < 5 ? 0.55 : 1.0;
             groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
        }
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. Black Core */}
      <mesh renderOrder={0} frustumCulled={false}>
        <sphereGeometry args={[1.3, 128, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* 2. Event Horizon (Glowing Shell) */}
      <mesh ref={horizonRef} renderOrder={1} frustumCulled={false}>
        <sphereGeometry args={[1.3 * 1.05, 128, 64]} />
        <shaderMaterial 
          vertexShader={eventHorizonVertex}
          fragmentShader={eventHorizonFragment}
          uniforms={horizonUniforms}
          transparent
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* 3. Accretion Disk */}
      <mesh 
        ref={diskRef} 
        renderOrder={2} 
        frustumCulled={false}
        rotation={[Math.PI / 3.0, 0, 0]} // Fixed tilt from reference
      >
        <ringGeometry args={[1.5, 8.0, 256, 128]} />
        <shaderMaterial 
          vertexShader={diskVertex} 
          fragmentShader={diskFragment} 
          uniforms={diskUniforms}
          transparent 
          depthWrite={false}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

const PostProcess = () => {
  const { size, camera } = useThree();
  const { isRecruiterMode } = useStore();
  
  const lensPassRef = useRef<ShaderPass>(null!);
  const glitchPassRef = useRef<ShaderPass>(null!);
  
  // Glitch Animation Logic
  const [glitchIntensity, setGlitchIntensity] = useState(0);

  useEffect(() => {
    // Trigger glitch on mode change
    let start = performance.now();
    let duration = 800;
    
    const animate = (time: number) => {
        let elapsed = time - start;
        let progress = Math.min(elapsed / duration, 1);
        // Spike intensity in middle
        let val = Math.sin(progress * Math.PI);
        setGlitchIntensity(val);
        
        if(progress < 1) requestAnimationFrame(animate);
        else setGlitchIntensity(0);
    };
    requestAnimationFrame(animate);
  }, [isRecruiterMode]);

  const lensUniforms = useMemo(() => ({
    tDiffuse: { value: null },
    blackHoleScreenPos: { value: new THREE.Vector2(0.5, 0.5) },
    lensingStrength: { value: 0.12 },
    lensingRadius: { value: 0.3 },
    aspectRatio: { value: size.width / size.height },
    chromaticAberration: { value: 0.015 },
    scanlineIntensity: { value: 0.15 },
    vignetteDarkness: { value: 0.8 }
  }), []);

  const glitchUniforms = useMemo(() => ({
      tDiffuse: { value: null },
      uIntensity: { value: 0 },
      uTime: { value: 0 }
  }), []);

  useFrame((state) => {
    // Update resolution uniforms
    lensUniforms.aspectRatio.value = size.width / size.height;
    
    // Project Black Hole Center to Screen
    const v = new THREE.Vector3(0,0,0);
    v.project(camera);
    lensUniforms.blackHoleScreenPos.value.set((v.x + 1)/2, (v.y + 1)/2);

    // Update Glitch
    glitchUniforms.uTime.value = state.clock.elapsedTime;
    glitchUniforms.uIntensity.value = glitchIntensity;
    
    if (glitchPassRef.current) {
        glitchPassRef.current.enabled = glitchIntensity > 0.01;
    }
  });

  return (
    <Effects disableGamma>
      {/* Bloom */}
      <unrealBloomPass threshold={0.0} strength={0.6} radius={0.7} />
      
      {/* Gravitational Lensing & Scanlines */}
      <shaderPass
        ref={lensPassRef}
        args={[{
          uniforms: lensUniforms,
          vertexShader: lensingVertex,
          fragmentShader: lensingFragment
        }]}
      />

      {/* Glitch Effect (Last) */}
      <shaderPass
        ref={glitchPassRef}
        args={[{
          uniforms: glitchUniforms,
          vertexShader: glitchVertex,
          fragmentShader: glitchFragment
        }]}
        enabled={false}
      />
    </Effects>
  );
};

const InteractionHint = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`absolute top-24 left-0 w-full flex justify-center z-20 pointer-events-none transition-opacity duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="bg-black/40 backdrop-blur-md border border-cyber-cyan/30 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.2)]">
         <span className="text-[10px] md:text-xs font-mono text-cyber-cyan tracking-[0.2em] uppercase drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">
            [ Drag Mouse to Shift Perspective ]
         </span>
      </div>
    </div>
  );
};

// Camera Controller for Loading Animation
const CameraController = () => {
  const { camera } = useThree();
  const { isLoading } = useStore();
  
  useFrame((state) => {
    if (isLoading) {
      // Gentle zoom out effect during loading
      // camera.position.set(-6.5, 5.0, 6.5); <- Target
      const t = state.clock.elapsedTime;
      // Start closer and zoom out
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, -6.5, 0.02);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 5.0, 0.02);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 6.5, 0.02);
      camera.lookAt(0, 0, 0);
    }
  });
  
  return null;
}

export const Scene3D = () => {
  const { isRecruiterMode, isLoading } = useStore();

  return (
    <div className={`fixed inset-0 z-0 transition-opacity duration-1000 ${isRecruiterMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
         style={{ background: 'radial-gradient(ellipse at center, #100518 0%, #020104 70%)' }}>
      
      {!isRecruiterMode && !isLoading && <InteractionHint />}

      <Canvas
        // Initial camera position is slightly closer for the zoom-out effect
        camera={{ position: [-3, 2, 3], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
          powerPreference: "high-performance"
        }}
      >
        <fogExp2 attach="fog" color="#020104" density={0.035} />
        
        {!isRecruiterMode && (
          <>
            <gridHelper args={[100, 50, 0x00ffff, 0x00ffff]} position={[0, -10, 0]} material-opacity={0.1} material-transparent material-blending={THREE.AdditiveBlending} />
            <CameraController />
            <BlackHoleObject />
            <ParticleSystem />
            <OptimizedStars />
            <PostProcess />
            <OrbitControls 
              enabled={!isLoading} // Disable controls during loading
              enableZoom={false} 
              enablePan={false} 
              enableDamping 
              dampingFactor={0.035}
              rotateSpeed={0.4}
              minDistance={2.5}
              maxDistance={100}
            />
          </>
        )}
      </Canvas>
    </div>
  );
};