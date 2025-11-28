import React, { useEffect, useState } from 'react';
import { Command, Mail, Eye, FileText, X } from 'lucide-react';
import { useStore } from '../store';
import { PERSONAL_INFO } from '../constants';

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isRecruiterMode, toggleRecruiterMode } = useStore();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const actions = [
    {
      id: 'toggle-mode',
      label: isRecruiterMode ? 'Switch to Cyber Mode' : 'Switch to Recruiter Mode',
      icon: <Eye size={18} />,
      action: () => { toggleRecruiterMode(); setIsOpen(false); }
    },
    {
      id: 'email',
      label: 'Copy Email',
      icon: <Mail size={18} />,
      action: () => { navigator.clipboard.writeText(PERSONAL_INFO.email); setIsOpen(false); alert("Email copied!"); }
    },
    {
      id: 'resume',
      label: 'Print Portfolio (PDF View)',
      icon: <FileText size={18} />,
      action: () => { window.print(); setIsOpen(false); }
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-[#111] border border-[#333] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center p-4 border-b border-[#333]">
          <Command className="text-gray-400 mr-2" size={20} />
          <input 
            type="text" 
            placeholder="Type a command..." 
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 font-mono"
            autoFocus
          />
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white">
            <X size={20} />
          </button>
        </div>
        <div className="p-2">
            <div className="text-xs font-mono text-gray-500 px-2 py-1 mb-1">SUGGESTIONS</div>
            {actions.map((action) => (
              <button
                key={action.id}
                onClick={action.action}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#222] text-gray-300 hover:text-white transition-colors text-left"
              >
                <span className="text-cyber-cyan">{action.icon}</span>
                <span>{action.label}</span>
              </button>
            ))}
        </div>
        <div className="p-2 border-t border-[#333] bg-black/50 text-center">
            <span className="text-xs text-gray-600 font-mono">Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};