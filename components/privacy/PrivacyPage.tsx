import React, { useState, useEffect } from 'react';
import { PrivacyHeader } from './PrivacyHeader';
import { Accordion } from './Accordion';
import { enContent } from './content/en';
import { zhHkContent } from './content/zh-hk';
import type { Language, PrivacyContent } from './types';

const LANGUAGE_STORAGE_KEY = 'nexus-privacy-language';

const getContent = (language: Language): PrivacyContent => {
  return language === 'en' ? enContent : zhHkContent;
};

export const PrivacyPage: React.FC = () => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved === 'en' || saved === 'zh-hk') {
        return saved;
      }
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const content = getContent(language);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PrivacyHeader
          title={content.pageTitle}
          lastUpdated={content.lastUpdated}
          language={language}
          onLanguageChange={setLanguage}
        />

        {/* Introduction */}
        <div className="mb-8 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          <p className="text-gray-700 leading-relaxed">{content.introduction}</p>
        </div>

        {/* Accordion Sections */}
        <Accordion sections={content.sections} />

        {/* Footer */}
        <footer className="mt-10 text-center text-sm text-gray-500">
          <p>
            {language === 'en'
              ? `Effective Date: ${content.effectiveDate}`
              : `生效日期：${content.effectiveDate}`}
          </p>
          <p className="mt-2">
            {language === 'en' ? (
              <>
                Questions? Contact us at{' '}
                <a
                  href="mailto:pathoworkmail@gmail.com"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  pathoworkmail@gmail.com
                </a>
              </>
            ) : (
              <>
                有問題？請聯絡我們：
                <a
                  href="mailto:pathoworkmail@gmail.com"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  pathoworkmail@gmail.com
                </a>
              </>
            )}
          </p>
        </footer>
      </div>
    </div>
  );
};
