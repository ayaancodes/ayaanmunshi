'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WhyWeBuiltShipFreePost() {
  return (
    <>
      <Header showHomeLink={true} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">Why We Built ShipFree: From Personal Need to Open Source Success</h1>
        <p className="text-sm text-foreground">Feb 09, 2025</p>

        <div className="mt-6 prose prose-sm max-w-none prose-headings:text-primary prose-p:text-foreground prose-a:text-white prose-a:underline prose-a:decoration-1 prose-a:underline-offset-4 prose-a:font-medium prose-a:mx-1 prose-li:text-foreground prose-ol:text-foreground prose-ul:text-foreground">
          <img 
            src="/images/star-history.png" 
            alt="ShipFree Growth Chart"
            className="w-full rounded-lg shadow-lg mb-6"
          />
          
          <p>
            Building products is exciting, but the initial setup can be a major roadblock. This is the story of how a weekend project to solve our own problem turned into a thriving open-source community.
          </p>

          <h2>The Problem We Faced</h2>
          <p>
            My friend <a href="https://irere.dev" target="_blank" rel="noopener noreferrer">Irere Emmanuel</a> and I had been shipping products for a while, but the process was consistently stressful. The market offered solutions like <a href="https://shipfa.st" target="_blank" rel="noopener noreferrer">ShipFast</a>, but at around $200, they were quite expensive for independent developers like us. We needed something more accessible, so we decided to build our own solution.
          </p>

          <h2>From Personal Tool to Open Source Project</h2>
          <p>
            What began as a simple internal tool quickly evolved. As we used our boilerplate, we realized many other developers faced the same challenges. That's when we decided to optimize it and make it open-source as <a href="https://github.com/salimhamed/shipfree" target="_blank" rel="noopener noreferrer">ShipFree</a>.
          </p>

          <h2>Our Launch Journey</h2>
          <p>
            Once we had a working version, we shared it on multiple platforms:
          </p>
          <ul className="text-foreground">
            <li>We posted it on <a href="https://app.daily.dev/posts/shipfree-the-open-source-saas-boilerplate-sosoef8e2" target="_blank" rel="noopener noreferrer">daily.dev</a>, where it gained 2.6k views and 120 upvotes</li>
            <li>We launched it on <a href="https://www.producthunt.com/products/shipfree#shipfree" target="_blank" rel="noopener noreferrer">Product Hunt</a></li>
            <li>We built in public on Twitter, sharing our progress</li>
            <li>We featured it on <a href="https://peerlist.io/salim_/project/shipfree" target="_blank" rel="noopener noreferrer">Peerlist Launchpad</a></li>
          </ul>

          <h2>Facing Criticism</h2>
          <p>
            Not everything was smooth sailing. We faced criticism, primarily because our landing page design resembled others in the space. But as a team, we didn't let that discourage us. Our focus remained on the functionality of the boilerplate itself, not just the aesthetics.
          </p>

          <h2>The Power of Community</h2>
          <p>
            Despite the initial criticism, the project attracted amazing contributors:
          </p>
          <ul className="text-foreground">
            <li><a href="https://yuss.dev" target="_blank" rel="noopener noreferrer">Yuss</a>, who refined the UI components</li>
            <li><a href="https://github.com/Chiliseo" target="_blank" rel="noopener noreferrer">Chiliseo</a>, who added Drizzle ORM and Docker support, taking the project to another level</li>
          </ul>
          <p>
            These contributions transformed ShipFree from a simple boilerplate into a comprehensive development toolkit.
          </p>

          <h2>Explosive Growth</h2>
          <p>
            The response exceeded our expectations:
          </p>
          <ul className="text-foreground">
            <li>On launch day, we gained 180+ GitHub stars</li>
            <li>We crossed 500 stars in less than a week</li>
            <li>We built the entire project over a single weekend (Saturday to Tuesday) and launched on Wednesday</li>
          </ul>
          <p>
            A huge thank you to <a href="https://x.com/midudev/status/1889327503207960690" target="_blank" rel="noopener noreferrer">Miguel Ángel Durán</a> for tweeting about our project—it brought in a massive amount of traffic and helped us reach developers worldwide.
          </p>

          <h2>Key Takeaways</h2>
          <p>
            This has been one of the biggest projects I've built so far, and it taught me several valuable lessons:
          </p>
          <ol className="text-foreground font-medium list-decimal pl-5">
            <li className="mb-2"><strong className="text-white">Don't wait for perfection</strong> - We launched a buggy project and iterated as we went</li>
            <li className="mb-2"><strong className="text-white">Embrace uncertainty</strong> - Honestly, we had no idea what we were doing at first—but that's the beauty of building in public</li>
            <li className="mb-2"><strong className="text-white">Community matters</strong> - The contributions from others took our project further than we could have alone</li>
            <li className="mb-2"><strong className="text-white">Just ship it</strong> - The most important lesson of all</li>
          </ol>

          <h2>What's Next for ShipFree?</h2>
          <p>
            We're continuing to improve ShipFree based on community feedback and contributions. Our goal is to make it the go-to solution for developers who want to ship products quickly without breaking the bank.
          </p>
          <p>
            Remember, the perfect moment to launch doesn't exist. The best time to ship is now.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
