import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { PrivacySection } from './types';

interface AccordionProps {
  sections: PrivacySection[];
}

interface AccordionItemProps {
  section: PrivacySection;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ section, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-6 text-left hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-gray-900">{section.title}</span>
        <ChevronDown
          size={20}
          className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 text-gray-700 leading-relaxed">
          {section.content}
        </div>
      </div>
    </div>
  );
};

export const Accordion: React.FC<AccordionProps> = ({ sections }) => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    setOpenSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {sections.map((section) => (
        <AccordionItem
          key={section.id}
          section={section}
          isOpen={openSections.has(section.id)}
          onToggle={() => toggleSection(section.id)}
        />
      ))}
    </div>
  );
};
