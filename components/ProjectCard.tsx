import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, Code2 } from 'lucide-react';
import { useStore } from '../store';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { isRecruiterMode } = useStore();
  const ref = useRef<HTMLDivElement>(null);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isRecruiterMode || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Recruiter Mode: Simple flat card
  if (isRecruiterMode) {
    return (
      <div className="border border-gray-200 bg-white p-6 rounded-lg mb-4 hover:border-blue-500 transition-colors">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900">{project.title}</h3>
          <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
            {project.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs text-gray-500 font-mono">#{t}</span>
          ))}
        </div>
      </div>
    );
  }

  // Cyber Mode: 3D Tilt
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative h-full"
    >
      <div 
        className="glass-panel h-full p-6 rounded-xl border-t border-l border-white/10 shadow-[0_0_15px_rgba(0,240,255,0.05)] hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-shadow duration-300 group overflow-hidden"
        style={{ transform: "translateZ(20px)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-cyber-cyan/10 rounded-lg text-cyber-cyan">
               <Code2 size={24} />
            </div>
            <span className="text-xs font-mono text-cyber-cyan/60 border border-cyber-cyan/20 px-2 py-1 rounded">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-mono text-gray-300 bg-white/5 px-2 py-1 rounded hover:bg-white/10 transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};