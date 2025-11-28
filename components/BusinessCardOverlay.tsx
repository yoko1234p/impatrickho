
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, QrCode, Smartphone, Mail, Linkedin, MapPin, Share2 } from 'lucide-react';
import { useStore } from '../store';
import { PERSONAL_INFO } from '../constants';

interface BusinessCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BusinessCardOverlay: React.FC<BusinessCardProps> = ({ isOpen, onClose }) => {
  const { isRecruiterMode } = useStore();
  const [isFlipped, setIsFlipped] = useState(false);

  // Use api.qrserver.com to generate the QR code dynamically
  // Added margin=0 for better fit and size=250x250 for clarity
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=0&data=${encodeURIComponent(PERSONAL_INFO.portfolio)}`;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md [perspective:1000px]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute -top-12 right-0 md:-right-12 p-2 text-white hover:text-cyber-cyan transition-colors"
          >
            <X size={24} />
          </button>

          {/* Card Container */}
          <div 
            className="relative w-full aspect-[1.7/1] cursor-pointer transition-transform duration-700 [transform-style:preserve-3d] group"
            style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* FRONT SIDE */}
            <div 
              className={`absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] rounded-xl overflow-hidden shadow-2xl border 
              ${isRecruiterMode 
                ? 'bg-white border-gray-200 text-gray-900' 
                : 'bg-[#0a0a0a] border-cyber-cyan/30 text-white shadow-[0_0_30px_rgba(0,240,255,0.15)]'
              }`}
              // Add translateZ(1px) to prevent z-fighting on iOS
              style={{ transform: 'translateZ(1px)' }}
            >
              {/* Background Accents */}
              {!isRecruiterMode && (
                <>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-purple/20 blur-[50px] rounded-full" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyber-cyan/20 blur-[50px] rounded-full" />
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                </>
              )}

              <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className={`text-2xl font-bold tracking-tight ${isRecruiterMode ? 'text-gray-900' : 'font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400'}`}>
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className={`text-sm font-mono mt-1 ${isRecruiterMode ? 'text-blue-600' : 'text-cyber-cyan'}`}>
                      {PERSONAL_INFO.role}
                    </p>
                  </div>
                  {/* Chip / Logo Element */}
                  <div className={`w-12 h-9 rounded-md flex items-center justify-center overflow-hidden
                    ${isRecruiterMode ? 'bg-gray-200' : 'bg-black/40 border border-cyber-cyan/30'}`}
                  >
                     <svg viewBox="0 0 48 36" className="w-full h-full opacity-80">
                        <path d="M4 8h8v20H4zM16 8h8v20h-8zM28 8h8v20h-8zM40 8h4v20h-4z" fill="none" stroke={isRecruiterMode ? "#666" : "#0ff"} strokeWidth="1" />
                        <rect x="2" y="4" width="44" height="28" rx="4" stroke={isRecruiterMode ? "#999" : "#0ff"} strokeWidth="2" fill="none" />
                        <path d="M0 18h48" stroke={isRecruiterMode ? "#999" : "#0ff"} strokeWidth="1" strokeOpacity="0.3" />
                        <path d="M12 4v28M24 4v28M36 4v28" stroke={isRecruiterMode ? "#999" : "#0ff"} strokeWidth="1" strokeOpacity="0.3" />
                     </svg>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                   <div className="space-y-2 text-xs font-mono opacity-80">
                      <div className="flex items-center gap-2">
                         <Mail size={12} /> {PERSONAL_INFO.email}
                      </div>
                      <div className="flex items-center gap-2">
                         <MapPin size={12} /> {PERSONAL_INFO.location}
                      </div>
                   </div>
                   
                   {/* Visual Only QR Code Placeholder */}
                   <div className={`p-2 rounded ${isRecruiterMode ? 'bg-gray-100' : 'bg-white/10'}`}>
                      <QrCode size={32} className={isRecruiterMode ? 'text-gray-800' : 'text-white'} />
                   </div>
                </div>
              </div>
              
              <div className={`absolute bottom-2 right-4 text-[10px] font-mono opacity-50 ${isRecruiterMode ? 'text-gray-400' : 'text-gray-500'}`}>
                CLICK TO FLIP ↻
              </div>
            </div>

            {/* BACK SIDE */}
            <div 
              className={`absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] rounded-xl overflow-hidden shadow-2xl border 
              ${isRecruiterMode 
                ? 'bg-white border-gray-200 text-gray-900' // Matches Front
                : 'bg-[#0a0a0a] border-cyber-cyan/30 text-white shadow-[0_0_30px_rgba(0,240,255,0.15)]' // Matches Front
              }`}
              // Add translateZ(1px) here as well to fix iOS rendering order
              style={{ transform: 'rotateY(180deg) translateZ(1px)' }}
            >
               {/* Background Accents (Copied from Front) */}
               {!isRecruiterMode && (
                <>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-purple/20 blur-[50px] rounded-full" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyber-cyan/20 blur-[50px] rounded-full" />
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                </>
              )}

               <div className="relative z-10 h-full flex items-center justify-between p-8">
                  <div className="flex flex-col gap-6">
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 group">
                       <div className={`p-2 rounded-full transition-colors ${isRecruiterMode ? 'bg-white shadow-sm group-hover:bg-blue-50' : 'bg-white/5 group-hover:bg-cyber-cyan/20'}`}>
                          <Mail size={18} className={isRecruiterMode ? 'text-blue-600' : 'text-cyber-cyan'} />
                       </div>
                       <span className="text-sm font-medium">{PERSONAL_INFO.email}</span>
                    </a>
                    
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                       <div className={`p-2 rounded-full transition-colors ${isRecruiterMode ? 'bg-white shadow-sm group-hover:bg-blue-50' : 'bg-white/5 group-hover:bg-cyber-purple/20'}`}>
                          <Linkedin size={18} className={isRecruiterMode ? 'text-blue-700' : 'text-cyber-purple'} />
                       </div>
                       <span className="text-sm font-medium">LinkedIn</span>
                    </a>

                    <div className="flex items-center gap-3 group cursor-default">
                       <div className={`p-2 rounded-full ${isRecruiterMode ? 'bg-white shadow-sm' : 'bg-white/5'}`}>
                          <Smartphone size={18} className={isRecruiterMode ? 'text-green-600' : 'text-green-400'} />
                       </div>
                       <span className="text-sm font-medium">{PERSONAL_INFO.phone}</span>
                    </div>
                  </div>

                  {/* QR Code Section */}
                  <div className="flex flex-col items-center gap-2">
                     <div className={`p-2 rounded-lg ${isRecruiterMode ? 'bg-white border border-gray-200' : 'bg-white p-1'}`}>
                        <img src={qrUrl} alt="Portfolio QR" className="w-24 h-24" />
                     </div>
                     <span className="text-[10px] font-mono uppercase tracking-wider opacity-60">Scan Portfolio</span>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
             <button 
               onClick={() => {
                   if (navigator.share) {
                       navigator.share({
                           title: PERSONAL_INFO.name,
                           text: PERSONAL_INFO.role,
                           url: PERSONAL_INFO.portfolio
                       })
                   } else {
                       navigator.clipboard.writeText(PERSONAL_INFO.portfolio);
                       alert("Portfolio Link Copied!");
                   }
               }}
               className={`flex items-center gap-2 mx-auto px-6 py-2 rounded-full font-mono text-sm transition-all
               ${isRecruiterMode 
                 ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' 
                 : 'bg-cyber-cyan/10 border border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/20 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]'}`}
             >
                <Share2 size={16} />
                <span>SHARE CONTACT</span>
             </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
