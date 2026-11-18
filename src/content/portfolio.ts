export type Work = {
  id: string;
  company: string;
  url?: string;
  role?: string;
  year?: string;
  location?: string;
  description?: string;
  intro?: string;
  skills?: { title: string; detail: string }[];
  logo?: string;
  mark?: string;
  scene: 'agent' | 'schedule' | 'market' | 'data' | 'workflow' | 'risk' | 'structure' | 'engineering' | 'design';
  illustration: string;
};

// Dates and personal work come from the owner-provided resume. Product media is attributed separately.
export const work: Work[] = [
  { id: 'aker', company: 'Aker AI', url: 'https://aker-ai.com/', role: 'Applied AI Engineer', year: 'Fall 2026', location: 'New York', logo: '/experience/AkerLogo.png', scene: 'agent', intro: 'Building multi-agent tools that help investment teams query real estate data in plain English.', skills: [{ title: 'Python', detail: 'Agent workflows and data tools' }, { title: 'Harness engineering', detail: 'Tool contracts, tracing, and evaluation' }, { title: 'RAG', detail: 'Retrieval and grounded context' }], illustration: 'Aker’s real estate investment platform.' },
  { id: 'rippling', company: 'Rippling', url: 'https://www.rippling.com/en-CA/platform', role: 'Software Engineer', year: 'Summer 2026', location: 'New York', description: 'Time & Attendance', intro: 'Built customer-facing AI Time Products features across Python, React, and MongoDB.', logo: '/experience/RipplingLogo.svg', scene: 'schedule', illustration: 'A sample schedule walkthrough: select a week, create a shift, and publish the schedule.' },
  { id: 'bmo', company: 'BMO Capital Markets', url: 'https://capitalmarkets.bmo.com/', role: 'Quantitative Trading', year: 'Winter 2026', location: 'Toronto', description: 'ETF Market Making', logo: '/experience/BMOmark.png', scene: 'market', illustration: 'A fictional market chart and order book with sample values.' },
  { id: 'rbc-technology', company: 'RBC Capital Markets', url: 'https://www.rbccm.com/en/expertise/global-markets/electronic-trading/ai-trading', role: 'Software Developer Intern', year: 'Fall 2025', location: 'Toronto', intro: 'Built streaming APIs, data validation, and event-processing pipelines for capital markets.', mark: 'RBC', scene: 'data', illustration: 'An abstract network connecting a database to application nodes.' },
  { id: 'rbc-amplify', company: 'RBC', url: 'https://www.rbc.com/', role: 'Software Developer Intern', year: 'Summer 2025', location: 'Toronto', description: 'Amplify Program', intro: 'Designed multi-agent orchestration and payment-data mappings for banking workflows.', mark: 'RBC', scene: 'workflow', illustration: 'A conceptual workflow connecting a request, a review, and a result.' },
  { id: 'rbc-risk', company: 'RBC Capital Markets', url: 'https://www.rbccm.com/en/expertise/global-markets/electronic-trading/ai-trading', role: 'Software Engineer Intern', location: 'Toronto', mark: 'RBC', scene: 'risk', illustration: 'A fictional analytics report with an animated bar chart.' },
  { id: 'canam', company: 'Canam Group', url: 'https://www.canam.com/en/', role: 'Engineering Intern', mark: 'C', scene: 'structure', illustration: 'An original line drawing of a steel structure with moving construction guides.' },
  { id: 'oec', company: 'Ontario Engineering Competition', mark: 'O', scene: 'engineering', illustration: 'An abstract engineering mechanism on a drafting grid.' },
  { id: 'design-thinking', company: 'Design Thinking Program', mark: 'D', scene: 'design', illustration: 'An original arrangement of research notes and a small interface prototype.' },
];
