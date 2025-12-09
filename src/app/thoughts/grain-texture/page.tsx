'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CalWidget() {
  return (
    <>
      <Header showHomeLink={true} />

      <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">Designing Grain Textures in Figma</h1>
      <p className="text-sm text-foreground">April 2, 2025</p>

      <div className="mt-6 prose prose-sm max-w-none prose-headings:text-primary prose-p:text-foreground">
        <p>
          Exploring the creative process of crafting grain textures in Figma. This isn't a step-by-step tutorial, 
          but rather a reflection on the approach and considerations when designing subtle grain effects.
        </p>
        
        <div className="my-8">
          <img 
            src="/images/cigra.png" 
            alt="Grain Texture Examples in Figma" 
            className="rounded-lg shadow-lg"
          />
        </div>

        <p>
          The beauty of grain textures lies in their ability to add depth and character to otherwise flat designs. 
          Through experimentation with noise filters and blend modes, we can achieve that perfect balance of 
          texture without overwhelming the main design elements.
        </p>
      </div>

      <Footer />
    </>
  )
}
