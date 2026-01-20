export interface PrivacySection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface PrivacyContent {
  pageTitle: string;
  lastUpdated: string;
  effectiveDate: string;
  introduction: string;
  sections: PrivacySection[];
}

export type Language = 'en' | 'zh-hk';
