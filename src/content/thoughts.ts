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
      title: 'Designing Grain Texture',
      description: 'minimal grain texture card .',
      date: 'Apr 02, 2025',
      slug: 'grain-texture',
      icon: 'https://ext.same-assets.com/937924524/3131399881.svg',
      tags: ['design', 'tools'],
    },
    {
      id: 2,
      title: 'Interactive 3D Button',
      description: 'A hover button that reacts with a realistic 3D effect.',
      date: 'Mar 31, 2024',
      slug: '3d-button',
      icon: 'https://ext.same-assets.com/937924524/275937493.svg',
      tags: ['design', 'frontend'],
    },
  ]
  