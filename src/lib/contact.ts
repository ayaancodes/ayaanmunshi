export const CONTACT_EMAIL = 'ayaanmunshi456@gmail.com';
export const CONTACT_TOPICS = ['Opportunities', 'Business ideas', 'Soccer', 'Say hello'] as const;
export type ContactTopic = typeof CONTACT_TOPICS[number];

export function contactDraft(topic: string, name: string, message: string) {
  const safeTopic = CONTACT_TOPICS.includes(topic as ContactTopic) ? topic : 'Say hello';
  const safeName = name.trim().replace(/[\r\n]/g, ' ').slice(0, 80);
  const body = `${message.trim().slice(0, 1500)}${safeName ? `\n\n${safeName}` : ''}`;
  const subject = `Let’s chat: ${safeTopic}`;
  return { body, subject, href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` };
}
