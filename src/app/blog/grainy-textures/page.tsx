'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function GrainyTexturesPost() {
  return (
    <>
      <Header showHomeLink={true} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">Creating Grainy Textures in Figma</h1>
        <p className="text-sm text-foreground">March 5, 2025</p>

        <div className="mt-6 prose prose-sm max-w-none prose-headings:text-primary prose-p:text-foreground prose-a:text-white prose-a:underline prose-a:decoration-1 prose-a:underline-offset-2 prose-a:font-medium prose-a:mx-1 prose-li:text-foreground prose-ol:text-foreground prose-ul:text-foreground">
          <div className="grid grid-cols-8 gap-2 mb-8">
            <div className="col-span-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-medium">1</div>
              <div className="h-full w-0.5 bg-primary/20 mt-2"></div>
            </div>
            <div className="col-span-7">
              <img 
                src="/images/1.png" 
                alt="Grainy Texture Step 1"
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <h2 className="mt-0">Grainy Patterns on Figma</h2>
              <p>
                Creating grainy textures adds depth and character to your designs. They can transform a flat, sterile interface into something with tactile appeal. In this tutorial, I'll walk you through creating beautiful grainy textures in Figma.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-2 mb-8">
            <div className="col-span-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-medium">2</div>
              <div className="h-full w-0.5 bg-primary/20 mt-2"></div>
            </div>
            <div className="col-span-7">
              <img 
                src="/images/2.png" 
                alt="Create this shape"
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <h2 className="mt-0">Create this shape</h2>
              <p>
                Start by creating a simple shape in Figma. This could be a rectangle, circle, or any other shape you want to apply the grainy texture to. I'm using a star shape for this example.
              </p>
              <p className="text-xs text-foreground/70">
                Press F to use the frame tool • Select a size • Add a fill color
              </p>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-2 mb-8">
            <div className="col-span-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-medium">3</div>
              <div className="h-full w-0.5 bg-primary/20 mt-2"></div>
            </div>
            <div className="col-span-7">
              <img 
                src="/images/3.png" 
                alt="Duplicate it multiple times"
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <h2 className="mt-0">Duplicate it multiple times</h2>
              <p>
                The key to creating a convincing grainy texture is layering. We'll duplicate our shape multiple times to build up the texture.
              </p>
              <p className="text-xs text-foreground/70">
                Select your shape • Press Ctrl+D or ⌘+D to duplicate • Create multiple copies
              </p>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-2 mb-8">
            <div className="col-span-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-medium">4</div>
              <div className="h-full w-0.5 bg-primary/20 mt-2"></div>
            </div>
            <div className="col-span-7">
              <img 
                src="/images/4.png" 
                alt="Apply layer blur"
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <h2 className="mt-0">Apply layer blur</h2>
              <p>
                Now it's time to add some blur to soften the shapes and create a base for our grain effect.
              </p>
              <p className="text-xs text-foreground/70">
                Select your layer • In the right panel, find Effects • Add a layer blur • Adjust the blur amount to your liking
              </p>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-2 mb-8">
            <div className="col-span-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-medium">5</div>
              <div className="h-full w-0.5 bg-primary/20 mt-2"></div>
            </div>
            <div className="col-span-7">
              <img 
                src="/images/5.png" 
                alt="Run the Noise & Texture Plugin"
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <h2 className="mt-0">Run the Noise & Texture Plugin</h2>
              <p>
                Now we'll add the actual grain effect using Figma's Noise & Texture plugin.
              </p>
              <p className="text-xs text-foreground/70">
                Install the Noise & Texture plugin • Run it from the plugins menu • Adjust noise settings • Apply to your layer
              </p>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-2 mb-8">
            <div className="col-span-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-medium">6</div>
              <div className="h-full w-0.5 bg-primary/20 mt-2"></div>
            </div>
            <div className="col-span-7">
              <img 
                src="/images/6.png" 
                alt="Change the blend mode"
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <h2 className="mt-0">Change the blend mode to "Soft Light"</h2>
              <p>
                Blend modes are crucial for achieving a realistic grainy texture. They determine how your layers interact with each other.
              </p>
              <p className="text-xs text-foreground/70">
                Select your texture layer • Change the blend mode to "Soft Light" • Adjust opacity as needed
              </p>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-2 mb-8">
            <div className="col-span-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-medium">7</div>
              <div className="h-full w-0.5 bg-primary/20 mt-2"></div>
            </div>
            <div className="col-span-7">
              <img 
                src="/images/7.png" 
                alt="Try it yourself"
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <h2 className="mt-0">Try it yourself!</h2>
              <p>
                Now it's your turn to experiment with different settings to create your own unique grainy textures.
              </p>
              <p className="text-xs text-foreground/70">
                Try different colors • Adjust noise settings • Experiment with blend modes • Create variations
              </p>
            </div>
          </div>
          <h2>Bonus Tips</h2>
          <p>
            Here are some additional tips to take your grainy textures to the next level:
          </p>
          <ol className="text-foreground font-medium list-decimal pl-5">
            <li className="mb-2"><strong className="text-white">Layer with gradients</strong> - Combine your grain with subtle gradients for added depth</li>
            <li className="mb-2"><strong className="text-white">Animate the grain</strong> - For web projects, consider subtle animation of the grain for a dynamic effect</li>
            <li className="mb-2"><strong className="text-white">Use with restraint</strong> - Grain works best as a subtle effect; don't overdo it</li>
            <li className="mb-2"><strong className="text-white">Consider accessibility</strong> - Ensure your grainy textures don't interfere with text readability</li>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  )
}