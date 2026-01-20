import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useSpring, Variants, AnimatePresence, useAnimation } from 'framer-motion';
import { Terminal, Code, Cpu, Globe, MapPin, Mail, Phone, ExternalLink, Moon, Sun, Command, FolderOpen, LayoutTemplate, Linkedin, IdCard, Mouse, Move } from 'lucide-react';
import { Scene3D } from './components/Scene3D';
import { ProjectCard } from './components/ProjectCard';
import { CommandPalette } from './components/CommandPalette';
import { BusinessCardOverlay } from './components/BusinessCardOverlay';
import { AIChatWidget } from './components/AIChatWidget';
import { PrivacyPage } from './components/privacy';
import { TermsPage } from './components/terms';
import { useStore } from './store';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILLS } from './constants';

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] // Custom cubic bezier for smooth "luxury" feel
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const LoadingOverlay: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Wait 2.5 seconds after hitting 100% before triggering completion
      const timer = setTimeout(() => {
        onComplete();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: "blur(20px) brightness(1.5)", // "Collapse" / burnout effect
        transition: { duration: 1.2, ease: "easeInOut" } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-64 h-1 bg-gray-900 rounded-full overflow-hidden border border-white/20">
          <motion.div 
            className="h-full bg-cyber-cyan shadow-[0_0_10px_#00f0ff]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-cyber-cyan font-mono text-xs tracking-[0.3em] animate-pulse">
            INITIALIZING SINGULARITY
          </span>
          <span className="text-gray-500 font-mono text-[10px]">
            {Math.floor(progress)}% COMPLETE
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const InteractionHint = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Keep it visible longer for emphasis
    const timer = setTimeout(() => {
      setVisible(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed bottom-12 left-1/2 -translate-x-1/2 z-40 pointer-events-none transition-all duration-1000 ease-in-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="relative group">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-cyber-cyan/30 rounded-xl blur-md animate-pulse"></div>
        
        {/* Card Content */}
        <div className="relative flex items-center gap-4 bg-black/90 backdrop-blur-xl border border-cyber-cyan/50 px-5 py-3 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          
          {/* Logo / Icon Badge */}
          <div className="relative flex items-center justify-center w-12 h-12 bg-cyber-cyan/10 rounded-lg border border-cyber-cyan/30">
            <Mouse size={24} className="text-cyber-cyan" />
            <div className="absolute -bottom-2 -right-2 bg-black border border-cyber-cyan/50 rounded-full p-1 shadow-lg">
               <Move size={12} className="text-white animate-pulse" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
             <span className="text-xs font-bold text-white tracking-widest uppercase mb-0.5 text-shadow-glow">
                Explore
             </span>
             <span className="text-[10px] font-mono text-cyber-cyan/80">
                DRAG TO ROTATE
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const { isRecruiterMode, toggleRecruiterMode, isLoading, setLoading } = useStore();
  const [showBusinessCard, setShowBusinessCard] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Reset scroll when loading finishes to ensure progress bar starts at 0
  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isRecruiterMode) {
      document.body.classList.add('recruiter-mode');
    } else {
      document.body.classList.remove('recruiter-mode');
    }
  }, [isRecruiterMode]);

  return (
    <div className={`min-h-screen relative transition-colors duration-500 font-sans ${isRecruiterMode ? 'bg-white text-gray-900' : 'bg-transparent text-gray-100'}`}>
      
      {/* Scroll Progress Bar - Only visible when not loading */}
      {!isLoading && (
        <motion.div
          className={`fixed top-0 left-0 right-0 h-1 origin-left z-40 ${
            isRecruiterMode 
              ? 'bg-gray-800' 
              : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 breathing-glow'
          }`}
          style={{ scaleX }}
        />
      )}

      {/* Background 3D Scene - Always rendered, acts as the loader visual */}
      <Scene3D />
      
      {/* Interaction Hint - Visible after loading in Cyber Mode */}
      {!isRecruiterMode && !isLoading && <InteractionHint />}

      {/* AI Chat Widget - Always available after loading */}
      {!isLoading && <AIChatWidget />}

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <LoadingOverlay 
            key="loader" 
            onComplete={() => setLoading(false)} 
          />
        )}
      </AnimatePresence>
      
      {/* Command Palette */}
      <CommandPalette />
      
      {/* Business Card Overlay */}
      <BusinessCardOverlay isOpen={showBusinessCard} onClose={() => setShowBusinessCard(false)} />

      {/* Top Right Controls */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="fixed top-6 right-6 z-50 flex items-center gap-3"
          >
            {/* Business Card Toggle */}
            <button
              onClick={() => setShowBusinessCard(true)}
              className={`p-2 rounded-full shadow-lg transition-all duration-300
                ${isRecruiterMode
                  ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  : 'bg-[#111]/80 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:border-cyber-cyan/50 hover:text-cyber-cyan'
                }`}
              title="Digital Business Card"
            >
              <IdCard size={20} />
            </button>

            {/* Mode Toggle */}
            <button
              onClick={toggleRecruiterMode}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm shadow-lg transition-all duration-300
                ${isRecruiterMode 
                  ? 'bg-gray-900 text-white hover:bg-gray-800' 
                  : 'bg-[#111]/80 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:border-blue-400 shadow-[0_0_15px_rgba(0,0,0,0.5)]'
                }`}
            >
              {isRecruiterMode ? <Moon size={16} /> : <Sun size={16} />}
              <span className="hidden md:inline">{isRecruiterMode ? 'Cyber Mode' : 'Recruiter Mode'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT - Only visible after loading */}
      {!isLoading && (
          <main className="relative z-10 max-w-5xl mx-auto px-6 pt-12 md:pt-24 pb-12">
            
            {/* HERO SECTION */}
            <motion.section 
              className="mb-24 md:mb-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className={`${isRecruiterMode ? '' : 'p-8 md:p-12 rounded-2xl bg-[#050505]/85 backdrop-blur-md border border-white/5 shadow-2xl'}`}>
                <motion.div variants={fadeInUp}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6
                    ${isRecruiterMode ? 'bg-gray-100 text-gray-600' : 'bg-blue-500/10 text-blue-300 border border-blue-500/30'}`}>
                    <span className={`w-2 h-2 rounded-full ${isRecruiterMode ? 'bg-green-500' : 'bg-blue-400 animate-pulse'}`}></span>
                    Available for new opportunities
                  </div>
                </motion.div>

                <motion.h1 variants={fadeInUp} className={`text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight ${isRecruiterMode ? 'text-gray-900' : 'text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-50 to-gray-400'}`}>
                  {PERSONAL_INFO.name}
                </motion.h1>
                
                <motion.h2 variants={fadeInUp} className={`text-xl md:text-3xl mb-8 ${isRecruiterMode ? 'text-gray-600 font-medium' : 'text-blue-300 font-light'}`}>
                  {PERSONAL_INFO.role}
                </motion.h2>

                <motion.p variants={fadeInUp} className={`max-w-2xl text-lg leading-relaxed mb-8 ${isRecruiterMode ? 'text-gray-700' : 'text-gray-200'}`}>
                  {PERSONAL_INFO.summary}
                </motion.p>

                <motion.div variants={fadeInUp} className={`flex flex-wrap gap-4 text-sm font-mono ${isRecruiterMode ? 'text-gray-600' : 'text-gray-300'}`}>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-400" /> {PERSONAL_INFO.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-blue-400" /> {PERSONAL_INFO.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-blue-400" /> {PERSONAL_INFO.phone}
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* EXPERIENCE SECTION */}
            <motion.section 
              className="mb-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-12">
                <h2 className={`text-3xl font-display font-bold ${isRecruiterMode ? 'text-gray-900' : 'text-white drop-shadow-lg'}`}>Experience</h2>
                {!isRecruiterMode && <div className="h-px bg-gray-800 flex-grow"></div>}
              </div>

              <div className={`space-y-8 ${isRecruiterMode ? '' : 'p-8 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 shadow-xl'}`}>
                {EXPERIENCES.map((exp, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    className={`relative pl-8 border-l-2 ${isRecruiterMode ? 'border-gray-200' : 'border-gray-800'}`}
                  >
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 ${isRecruiterMode ? 'bg-white border-blue-600' : 'bg-[#0a0a0a] border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]'}`} />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      <div className="flex flex-wrap items-center gap-4">
                        <h3 className={`text-2xl font-bold ${isRecruiterMode ? 'text-gray-900' : 'text-white'}`}>
                          {exp.companyUrl ? (
                            <a 
                              href={exp.companyUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="hover:text-blue-400 hover:underline hover:underline-offset-4 decoration-blue-500/50 transition-all"
                              title={`Visit ${exp.company} website`}
                            >
                              {exp.company}
                            </a>
                          ) : (
                            exp.company
                          )}
                        </h3>
                        {exp.url && (
                            <a 
                              href={exp.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300
                                ${isRecruiterMode 
                                  ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' 
                                  : 'bg-blue-900/20 text-blue-300 border border-blue-500/20 hover:bg-blue-500/30 hover:text-white hover:scale-105'}`}
                              title="View Project"
                            >
                                <span>Visit Project</span>
                                <ExternalLink size={14} />
                            </a>
                        )}
                      </div>
                      <span className={`font-mono text-sm ${isRecruiterMode ? 'text-gray-500' : 'text-blue-300/80'}`}>{exp.period}</span>
                    </div>
                    
                    <div className={`text-lg mb-4 ${isRecruiterMode ? 'text-blue-600 font-medium' : 'text-gray-200 font-semibold'}`}>{exp.role}</div>
                    
                    <ul className={`list-disc list-outside ml-4 mb-6 space-y-2 ${isRecruiterMode ? 'text-gray-700' : 'text-gray-300'}`}>
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>

                    {/* Prominent Links Section */}
                    {exp.relatedLinks && (
                      <div className="mb-6 flex flex-wrap gap-3">
                        {exp.relatedLinks.map((link, i) => (
                          <a 
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-300
                              ${isRecruiterMode 
                                ? 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100' 
                                : 'bg-white/5 border-white/10 text-gray-200 hover:bg-blue-600/20 hover:border-blue-400/50 hover:scale-[1.02] shadow-lg'}`}
                          >
                            <div className={`p-2 rounded-md ${isRecruiterMode ? 'bg-white' : 'bg-black/40'}`}>
                              <FolderOpen size={18} className={isRecruiterMode ? 'text-blue-600' : 'text-blue-400'} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs opacity-70 uppercase tracking-wider font-bold">Showcase</span>
                                <span className="font-semibold">{link.label}</span>
                            </div>
                            <ExternalLink size={14} className="ml-2 opacity-50 group-hover:opacity-100" />
                          </a>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span key={t} className={`text-xs px-2 py-1 rounded font-mono ${isRecruiterMode ? 'bg-gray-100 text-gray-700' : 'bg-[#1a1a1a] text-gray-400 border border-white/10'}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* PROJECTS SECTION */}
            <motion.section 
              className="mb-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-4 mb-12">
                <h2 className={`text-3xl font-display font-bold ${isRecruiterMode ? 'text-gray-900' : 'text-white drop-shadow-lg'}`}>Notable Projects</h2>
                {!isRecruiterMode && <div className="h-px bg-gray-800 flex-grow"></div>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((project, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="h-full">
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* SKILLS SECTION */}
            <motion.section 
              className="mb-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-4 mb-12">
                <h2 className={`text-3xl font-display font-bold ${isRecruiterMode ? 'text-gray-900' : 'text-white drop-shadow-lg'}`}>Technical Skills</h2>
                {!isRecruiterMode && <div className="h-px bg-gray-800 flex-grow"></div>}
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isRecruiterMode ? '' : 'p-8 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 shadow-xl'}`}>
                {SKILLS.map((group, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={fadeInUp}
                    className={`${isRecruiterMode ? 'bg-gray-50 p-6 rounded-lg' : ''}`}
                  >
                    <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${isRecruiterMode ? 'text-gray-900' : 'text-blue-400'}`}>
                      {idx === 0 && <Code size={20}/>}
                      {idx === 1 && <LayoutTemplate size={20}/>}
                      {idx === 2 && <Cpu size={20}/>}
                      {idx === 3 && <Terminal size={20}/>}
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, sIdx) => (
                        <div 
                          key={sIdx} 
                          className={`px-3 py-2 rounded-md text-sm font-medium transition-transform hover:-translate-y-1
                            ${isRecruiterMode 
                              ? 'bg-white border border-gray-200 text-gray-800 shadow-sm' 
                              : 'bg-[#1a1a1a] border border-white/10 text-gray-300 hover:border-blue-400/50 hover:text-white'}`}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </main>
     
      )}

      {/* FOOTER - Moved outside main for full-width styling in Recruiter Mode */}
      {!isLoading && (
        <footer className={`relative z-10 w-full py-12 ${isRecruiterMode ? 'bg-gray-50 border-t border-gray-200' : 'mt-12'}`}>
          
          {/* Cyber Footer Background */}
          {!isRecruiterMode && (
             <div className="absolute inset-0 bg-black/90 backdrop-blur-xl border-t border-white/10">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
             </div>
          )}

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 max-w-5xl mx-auto px-6">
            <div className="text-center md:text-left">
              <p className={`font-bold text-lg tracking-wide ${isRecruiterMode ? 'text-gray-900' : 'text-white'}`}>Let's build something scalable.</p>
              <p className={`mt-2 text-sm ${isRecruiterMode ? 'text-gray-500' : 'text-gray-500'}`}>© {new Date().getFullYear()} Patrick Ho.</p>
            </div>
            
            {!isRecruiterMode && (
              <div className="hidden md:flex items-center gap-3 text-xs text-gray-500 font-mono bg-[#050505] px-4 py-2 rounded border border-white/5">
                <div className="flex items-center gap-1"><Command size={12} /> K</div>
                <span className="opacity-50">|</span>
                <span>OPEN COMMAND PALETTE</span>
              </div>
            )}
            
            <div className="flex gap-6">
               <a 
                 href={`mailto:${PERSONAL_INFO.email}`} 
                 className={`transition-all hover:scale-110 ${isRecruiterMode ? 'text-gray-600 hover:text-blue-600' : 'text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'}`}
                 aria-label="Email"
               >
                 <Mail size={24} />
               </a>
               <a 
                 href={PERSONAL_INFO.linkedin} 
                 target="_blank" 
                 rel="noreferrer" 
                 className={`transition-all hover:scale-110 ${isRecruiterMode ? 'text-gray-600 hover:text-blue-600' : 'text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'}`}
                 aria-label="LinkedIn"
               >
                 <Linkedin size={24} />
               </a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

// Simple router component
const Router: React.FC = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Route: /privacy
  if (path === '/privacy' || path === '/privacy/') {
    return <PrivacyPage />;
  }

  // Route: /terms
  if (path === '/terms' || path === '/terms/') {
    return <TermsPage />;
  }

  // Default: Main portfolio
  return <App />;
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);