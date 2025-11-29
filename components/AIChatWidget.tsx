import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Minimize2 } from 'lucide-react';
import { useStore } from '../store';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const AIChatWidget: React.FC = () => {
  const { isRecruiterMode } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [conversationHistory, setConversationHistory] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      role: 'assistant',
      content: "Hello! I'm Patrick's Portfolio Assistant. \n\nI can answer questions about his experience, skills, and projects. Try asking: \"What is his tech stack?\" or \"Tell me about his work experience.\"",
      timestamp: new Date()
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = inputValue.trim();
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // 更新對話歷史
    const newHistory = [...conversationHistory, { role: 'user' as const, content: userMessage }];
    setConversationHistory(newHistory);

    try {
      // 呼叫 Vercel API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newHistory }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const aiResponse = data.content || "Sorry, I couldn't process that. Please try again.";

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
      setConversationHistory(prev => [...prev, { role: 'assistant', content: aiResponse }]);

    } catch (error) {
      console.error('AI Chat Error:', error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none ${isRecruiterMode ? 'font-sans' : 'font-mono'}`}>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`pointer-events-auto w-[90vw] md:w-[400px] h-[500px] max-h-[80vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl mb-4 border transition-colors duration-500
              ${isRecruiterMode
                ? 'bg-white border-gray-200 text-gray-800'
                : 'bg-[#050505]/95 backdrop-blur-xl border-cyber-cyan/30 text-gray-100 shadow-[0_0_40px_rgba(0,240,255,0.15)]'
              }`}
          >
            {/* Header */}
            <div className={`flex items-center justify-between p-4 border-b
              ${isRecruiterMode ? 'bg-gray-50 border-gray-200' : 'bg-white/5 border-white/10'}`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${isRecruiterMode ? 'bg-blue-100 text-blue-600' : 'bg-cyber-cyan/20 text-cyber-cyan'}`}>
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${isRecruiterMode ? 'text-gray-900' : 'text-white'}`}>
                    Portfolio Assistant
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isRecruiterMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${isRecruiterMode ? 'bg-green-500' : 'bg-green-400'}`}></span>
                    </span>
                    <span className="text-[10px] opacity-70">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-2 rounded-md transition-colors ${isRecruiterMode ? 'hover:bg-gray-200 text-gray-500' : 'hover:bg-white/10 text-gray-400 hover:text-white'}`}
                >
                  <Minimize2 size={16} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className={`flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar
              ${isRecruiterMode ? 'bg-gray-50' : 'bg-black/20'}`}>

              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                    ${msg.role === 'user'
                      ? (isRecruiterMode ? 'bg-gray-200 text-gray-600' : 'bg-white/10 text-gray-300')
                      : (isRecruiterMode ? 'bg-blue-100 text-blue-600' : 'bg-cyber-cyan/20 text-cyber-cyan')
                    }`}
                  >
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>

                  <div className={`flex flex-col max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed
                      ${msg.role === 'user'
                        ? (isRecruiterMode
                            ? 'bg-blue-600 text-white rounded-tr-sm shadow-md'
                            : 'bg-white/10 text-white rounded-tr-sm border border-white/10')
                        : (isRecruiterMode
                            ? 'bg-white text-gray-800 rounded-tl-sm shadow-sm border border-gray-100'
                            : 'bg-cyber-cyan/5 text-gray-200 rounded-tl-sm border border-cyber-cyan/20 shadow-[0_0_15px_rgba(0,240,255,0.05)]')
                      }`}
                    >
                      {msg.content}
                    </div>
                    <span className="text-[10px] opacity-40 mt-1 px-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isRecruiterMode ? 'bg-blue-100 text-blue-600' : 'bg-cyber-cyan/20 text-cyber-cyan'}`}>
                    <Bot size={14} />
                  </div>
                  <div className={`px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1 h-[44px]
                    ${isRecruiterMode ? 'bg-white border border-gray-100' : 'bg-cyber-cyan/5 border border-cyber-cyan/20'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className={`p-4 border-t ${isRecruiterMode ? 'bg-white border-gray-200' : 'bg-[#0a0a0a] border-white/10'}`}>
              <div className={`relative flex items-center rounded-xl overflow-hidden border transition-all duration-300
                ${isRecruiterMode
                  ? 'bg-gray-50 border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100'
                  : 'bg-white/5 border-white/10 focus-within:border-cyber-cyan/50 focus-within:shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                }`}
              >
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Patrick..."
                  rows={1}
                  className={`flex-1 bg-transparent px-4 py-3 outline-none resize-none max-h-32 text-sm
                    ${isRecruiterMode ? 'text-gray-900 placeholder:text-gray-400' : 'text-white placeholder:text-gray-600'}`}
                  style={{ minHeight: '44px' }}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className={`p-2 mr-2 rounded-lg transition-all
                    ${!inputValue.trim() || isTyping
                      ? 'opacity-30 cursor-not-allowed'
                      : (isRecruiterMode ? 'text-blue-600 hover:bg-blue-50' : 'text-cyber-cyan hover:bg-cyber-cyan/20 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)]')
                    }`}
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="text-[10px] text-center mt-2 opacity-40">
                Powered by GPT
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`pointer-events-auto relative group flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-500
          ${isRecruiterMode
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-black/80 backdrop-blur-md border border-cyber-cyan/50 text-cyber-cyan shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:bg-cyber-cyan/10'
          } ${isOpen ? 'rotate-90' : 'rotate-0'}`}
      >
        <AnimatePresence mode='wait'>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare size={24} />
              <span className={`absolute -top-1 -right-1 flex h-3 w-3`}>
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isRecruiterMode ? 'bg-red-400' : 'bg-cyber-purple'}`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${isRecruiterMode ? 'bg-red-500' : 'bg-cyber-purple'}`}></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
