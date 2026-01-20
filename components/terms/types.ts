export interface TermsSection {
  id: string;
  title: string;
  content: string;
}

export interface TermsContent {
  pageTitle: string;
  lastUpdated: string;
  effectiveDate: string;
  introduction: string;
  sections: TermsSection[];
}
