// src/content/thoughts.ts

export type Thought = {
    id: number
    title: string
    description: string
    date: string
    slug: string
    icon: string
    tags: string[]
  }
  
  export const THOUGHTS: Thought[] = [
    {
      id: 1,
      title: 'Options Terminology',
      description: 'order tickets, moneyness, and core option language.',
      date: 'Sept 02, 2025',
      slug: 'options-notes-01',
      icon: 'https://ext.same-assets.com/937924524/3131399881.svg',
      tags: ['markets'],
    },
    {
      id: 2,
      title: 'Elementary Options Strategy',
      description: 'developing intuition for risk, reward, and payoff diagrams.',
      date: 'August 27, 2025',
      slug: 'options-notes-02',
      icon: 'https://ext.same-assets.com/937924524/275937493.svg',
      tags: ['markets'],
    },
  ]
  