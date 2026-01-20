import React from 'react';

export type Language = 'en' | 'zh-hk';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle = 'Nexus App',
  lastUpdated,
  language,
  onLanguageChange,
}) => {
  return (
    <header className="mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h1>
            <p className="text-sm text-gray-500">{subtitle}</p>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              language === 'en'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => onLanguageChange('zh-hk')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              language === 'zh-hk'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            繁
          </button>
        </div>
      </div>

      {/* Last Updated */}
      <p className="text-sm text-gray-500">
        {language === 'en' ? 'Last Updated: ' : '最後更新：'}
        {lastUpdated}
      </p>
    </header>
  );
};
