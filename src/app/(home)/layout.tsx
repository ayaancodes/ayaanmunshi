import LandingOverlay from "@/components/LandingOverlay";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="font-sans h-screen snap-y snap-mandatory overflow-y-scroll">
      {/* Section 1 — Landing (full viewport hero) */}
      <section className="h-screen snap-start snap-always">
        <LandingOverlay />
      </section>

      {/* Section 2 — Main portfolio content */}
      <section
        id="content"
        className="min-h-screen snap-start snap-always mx-auto max-w-[400px] px-4 pt-10 md:max-w-[700px]"
      >
        {children}
      </section>
    </main>
  );
}
