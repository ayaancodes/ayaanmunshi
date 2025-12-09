'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HoverButton() {
  return (
    <>
      <Header showHomeLink={true} />

      <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">Interactive 3D Button</h1>
      <p className="text-sm text-foreground">March 21, 2025</p>

      <div className="mt-6 prose prose-sm max-w-none prose-headings:text-primary prose-p:text-foreground">
        <video 
          className="w-full rounded-lg shadow-lg mb-6"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/vids/3D.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p>
          A hover button that reacts with a realistic 3D effect cooked in Framer. This implementation 
          demonstrates how to create an engaging user interface element that responds 
          to user interaction with depth and dimension.
        </p>
        <p>
          The button uses a combination of transform properties and subtle shadows 
          to achieve a realistic pressing effect when users hover over it.
        </p>
      </div>

      <Footer />
    </>
  )
}
