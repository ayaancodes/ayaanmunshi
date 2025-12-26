'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'


export default function CompetingAgainstSmartPeople() {
    return (
        <>
            <Link
                href="/thoughts"
                className="
    inline-flex items-center gap-2
    text-sm text-foreground/70
    hover:text-primary
    transition-colors
    mb-4
  "
            >
                ← Back to Thoughts
            </Link>

            <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">
                Competing Against Smart People Is a Losing Game
            </h1>
            <p className="text-sm text-foreground/80">
                Dec 26, 2025 · Thoughts / Psychology
            </p>

            <div
                className="
          mt-8
          prose prose-base md:prose-lg
          max-w-none
          prose-headings:text-primary
          prose-p:text-foreground
          prose-li:text-foreground
          prose-ol:text-foreground
          prose-ul:text-foreground
          prose-strong:text-primary
          prose-em:text-foreground
          prose-a:text-primary
          prose-a:no-underline
          prose-a:font-medium
          prose-a:opacity-90
          prose-a:hover:opacity-100
        "
            >
                {/* Custom quote block (avoid default prose blockquote styling) */}
                <div className="not-prose mb-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[15px] leading-relaxed text-foreground">
                        <span className="text-primary/90">“</span>
                        You gain more by not being stupid than you do by being smart. Smart gets neutralized
                        by other smart people. Stupid does not.
                        <span className="text-primary/90">”</span>
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                        <span className="h-px w-10 bg-white/10" />
                        <p className="text-xs tracking-wide text-foreground/70">
                            — Phil Birnbaum
                        </p>
                    </div>
                </div>

                <p>
                    This idea sounds almost insulting at first, but the more time you spend around competitive
                    environments, the more obvious it becomes.
                </p>

                <p>
                    Whenever you step into arenas where intelligence naturally clusters, such as finance, startups,
                    research, elite schools, high-end careers, raw intelligence stops being an edge. It becomes
                    table stakes. Everyone is smart. Everyone can reason well. Everyone has strong arguments,
                    models, and priors. At that point, intelligence mostly cancels itself out.
                </p>

                <p className="text-primary/90">
                    What’s left isn’t brilliance. It’s positioning.
                </p>

                <hr className="border-white/10" />

                <p>
                    Quantitative finance is a clean example. It’s one of the most lucrative businesses in the
                    world, so it attracts an extreme concentration of talent. PhDs, competition math kids,
                    engineers who think fluently in probability space. If you try to compete head-on in that
                    environment - same data, same tools, same objectives - you’re implicitly betting that
                    you’re smarter than the smartest people in the room.
                </p>

                <p className="text-primary/90">That’s a bad bet.</p>

                <p>
                    Not because you aren’t smart, but because the distribution is brutal. Someone else is always
                    just as smart, slightly earlier, slightly faster, slightly better resourced, or slightly less
                    emotional. Intelligence alone doesn’t compound when everyone has it.
                </p>

                <p>
                    This pattern shows up far beyond finance. In startups, everyone has ideas. In research,
                    everyone can reason. In competitive careers, everyone is “high potential.” Once intelligence
                    is common, it stops differentiating.
                </p>

                <p>
                    That’s where the real lesson kicks in:{' '}
                    <em>edges rarely come from being smarter, they come from being different in the right way.</em>
                </p>

                <hr className="border-white/10" />

                <p>
                    This is why the most interesting work tends to happen at intersections.
                </p>

                <p>
                    People take quantitative tools and apply them to gambling markets instead of equities. Others
                    bring market intuition into areas like art, collectibles, or cultural assets, systems driven
                    by narratives, institutions, and social signaling rather than clean spreadsheets.
                </p>

                <p>
                    Art is a good example. Most people in art don’t think quantitatively. Most people who think
                    quantitatively ignore art because it feels subjective and messy. That gap is the opportunity.
                    The edge isn’t superior intelligence, it’s seeing the system differently and applying tools
                    where competition is thinner.
                </p>

                <p>
                    Intersections matter because intelligence spreads out. The smartest people are still smart,
                    but they’re no longer all standing on the same patch of ground, fighting over the same inches.
                </p>

                <hr className="border-white/10" />

                <p>
                    There’s another layer to this. Intelligence often amplifies bias.
                </p>

                <p>
                    Smart people are very good at rationalizing bad ideas. They build elegant models around flawed
                    assumptions. They get emotionally attached to work because they’ve invested time and ego into
                    it. Being smart doesn’t protect you from blind spots, it can make them harder to see.
                </p>

                <p className="text-primary/90">
                    That’s why “not being stupid” is such an underrated advantage.
                </p>

                <p>
                    Avoiding catastrophic errors. Avoiding leverage you don’t fully understand. Avoiding strategies
                    where one bad outcome wipes out a long string of small wins. Over long time horizons, survival
                    beats brilliance.
                </p>

                <p>
                    So the goal isn’t to outthink everyone else at their own game. That game is crowded, noisy, and
                    unforgiving.
                </p>

                <p>
                    The real game is to shift the frame slightly. To find places where your way of thinking isn’t
                    fully priced in yet. To bring edges from different domains, curiosity, unusual combinations of
                    skills, different incentives, different tolerances for ambiguity.
                </p>

                <p className="text-primary/90">
                    Competing against smart people head-on is a losing game.
                </p>

                <p>
                    Competing with your own edges, in places where intelligence hasn’t fully converged yet, that’s
                    where asymmetric outcomes are born.
                </p>
            </div>

            <Footer />
        </>
    )
}
