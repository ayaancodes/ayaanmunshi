export type Work = {
  id: string;
  company: string;
  role?: string;
  year?: string;
  description?: string;
  logo?: string;
  mark?: string;
  scene: 'agent' | 'schedule' | 'market' | 'data' | 'workflow' | 'risk' | 'structure' | 'engineering' | 'design';
  illustration: string;
};

// Publish only confirmed copy here. The owner is supplying the final card stories.
export const work: Work[] = [
  { id: 'aker', company: 'Aker AI', role: 'Applied AI Engineer', mark: 'a', scene: 'agent', illustration: 'An abstract assistant organizing a question, context, and response.' },
  { id: 'rippling', company: 'Rippling', role: 'Software Engineer', year: '2026', description: 'Time & Attendance', logo: '/experience/RipplingLogo.svg', scene: 'schedule', illustration: 'A sample weekly schedule with animated shift blocks.' },
  { id: 'bmo', company: 'BMO Capital Markets', role: 'Quantitative Trading', year: '2026', description: 'ETF Market Making', logo: '/experience/BMOLogo.webp', scene: 'market', illustration: 'A fictional market chart and order book with sample values.' },
  { id: 'rbc-technology', company: 'RBC Capital Markets', role: 'Quantitative Developer Intern', logo: '/experience/RBCLogo.jpg', scene: 'data', illustration: 'An abstract network connecting a database to application nodes.' },
  { id: 'rbc-amplify', company: 'RBC', role: 'Software Engineer Intern', logo: '/experience/RBCLogo.jpg', scene: 'workflow', illustration: 'A conceptual workflow connecting a request, a review, and a result.' },
  { id: 'rbc-risk', company: 'RBC Capital Markets', role: 'Software Engineer Intern', logo: '/experience/RBCLogo.jpg', scene: 'risk', illustration: 'A fictional analytics report with an animated bar chart.' },
  { id: 'canam', company: 'Canam Group', role: 'Engineering Intern', mark: 'C', scene: 'structure', illustration: 'An original line drawing of a steel structure with moving construction guides.' },
  { id: 'oec', company: 'Ontario Engineering Competition', mark: 'O', scene: 'engineering', illustration: 'An abstract engineering mechanism on a drafting grid.' },
  { id: 'design-thinking', company: 'Design Thinking Program', mark: 'D', scene: 'design', illustration: 'An original arrangement of research notes and a small interface prototype.' },
];
