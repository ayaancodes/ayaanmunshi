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
  photos?: { src: string; alt: string; caption?: string; width: number; height: number; position?: string; cropRight?: number; cropLeft?: number }[];
  photoPlacement?: 'preview' | 'panel';
};

// Dates and personal work come from the owner-provided resume. Product media is attributed separately.
export const work: Work[] = [
  { id: 'aker', company: 'Aker AI', url: 'https://aker-ai.com/', role: 'Applied AI Engineer', year: 'Fall 2026', location: 'New York', logo: '/experience/AkerLogo-owner.png', scene: 'agent', intro: 'Building multi-agent tools that help investment teams query real estate data in plain English.', skills: [{ title: 'Python', detail: 'Agent workflows and data tools' }, { title: 'Harness engineering', detail: 'Tool contracts, tracing, and evaluation' }, { title: 'RAG', detail: 'Retrieval and grounded context' }], illustration: 'Aker’s real estate investment platform.' },
  { id: 'rippling', company: 'Rippling', url: 'https://www.rippling.com/en-CA/platform', role: 'Software Engineer', year: 'Summer 2026', location: 'New York', description: 'Time & Attendance', intro: 'Built customer-facing AI Time Products features across Python, React, and MongoDB.', logo: '/experience/RipplingLogo.svg', scene: 'schedule', illustration: 'Rippling’s public scheduling product screenshots: build, review, and publish.' },
  { id: 'bmo', company: 'BMO Capital Markets', url: 'https://capitalmarkets.bmo.com/', role: 'Quantitative Trading', year: 'Winter 2026', location: 'Toronto', description: 'ETF Market Making', logo: '/experience/BMOmark.png', scene: 'market', illustration: 'A fictional market chart and order book with sample values.', photoPlacement: 'panel', photos: [{ src: '/experience/bmo-desk-redacted.png', alt: 'A desk with multiple monitors and a trading keyboard; screen and notebook details are obscured.', caption: 'At my BMO desk. Screen details obscured.', width: 1189, height: 1323, cropRight: 0.15, cropLeft: 0.017 }] },
  { id: 'rbc-technology', company: 'RBC Capital Markets', url: 'https://www.rbccm.com/en/expertise/global-markets/electronic-trading/ai-trading', role: 'Software Developer Intern', year: 'Fall 2025', location: 'Toronto', intro: 'Built streaming APIs, data validation, and event-processing pipelines for capital markets.', logo: '/experience/RBCLogo-owner.png', scene: 'data', illustration: 'A conceptual transaction stream with SQL snapshots, C# subscriptions, and PyTest integrity checks.' },
  { id: 'rbc-amplify', company: 'RBC', url: 'https://www.rbc.com/', role: 'Software Developer Intern', year: 'Summer 2025', location: 'Toronto', description: 'Amplify Program', intro: 'Designed multi-agent orchestration and payment-data mappings for banking workflows.', logo: '/experience/RBCLogo-owner.png', scene: 'workflow', illustration: 'A conceptual workflow connecting a request, a review, and a result.' },
  { id: 'rbc-risk', company: 'RBC Capital Markets', url: 'https://www.rbccm.com/en/expertise/global-markets/electronic-trading/ai-trading', role: 'Software Engineer Intern', location: 'Toronto', logo: '/experience/RBCLogo-owner.png', scene: 'risk', illustration: 'A fictional analytics report with an animated bar chart.' },
  { id: 'canam', company: 'Canam Group', url: 'https://www.canam.com/en/', role: 'Engineering Intern', mark: 'C', scene: 'structure', illustration: 'An original line drawing of a steel structure with moving construction guides.' },
  { id: 'oec', company: 'Ontario Engineering Competition', mark: 'O', scene: 'engineering', illustration: 'Presenting at the Ontario Engineering Competition.', photos: [{ src: '/experience/oec-presentation.png', alt: 'Ayaan and a teammate presenting at the Ontario Engineering Competition podium.', caption: 'Presenting at the Ontario Engineering Competition.', width: 1179, height: 658, position: '50% 45%' }] },
  { id: 'design-thinking', company: 'Design Thinking Program', mark: 'D', scene: 'design', illustration: 'Photos from the Design Thinking Program.', photos: [{ src: '/experience/design-thinking-team.jpg', alt: 'The team presenting FinIQ in a classroom.', caption: 'Presenting FinIQ with the team.', width: 6016, height: 4016, position: '50% 55%' }, { src: '/experience/design-thinking-presenting.jpg', alt: 'Ayaan presenting during the Design Thinking Program.', caption: 'Presenting our ideas.', width: 2624, height: 3936, position: '50% 55%' }, { src: '/experience/design-thinking-discussion.jpg', alt: 'Ayaan in discussion with teammates.', caption: 'A team discussion.', width: 3936, height: 2624, position: '50% 55%' }] },
];
