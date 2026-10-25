// src/content/thoughts.ts

export type Thought = {
    id: number
    title: string
    description: string
    date: string
    slug: string
    tags: string[]
  }
  
  export const THOUGHTS: Thought[] = [
    {
      id: 1,
      title: 'Options Terminology',
      description: 'order tickets, moneyness, and core option language.',
      date: 'August 28, 2025',
      slug: 'options-notes-01',
      tags: ['markets'],
    },
    {
      id: 2,
      title: 'Elementary Options Strategy',
      description: 'developing intuition for risk, reward, and payoff diagrams.',
      date: 'Sept 02, 2025',
      slug: 'options-notes-02',
      tags: ['markets'],
    },
    {
      id: 3,
      title: 'Competing Against Smart People',
      description: 'competing with your own edges, in places where intelligence hasn’t fully converged yet.',
      date: 'December 26, 2025',
      slug: 'competing-against-smart-people',
      tags: ['thoughts', 'psychology'],
    },
  ]
  