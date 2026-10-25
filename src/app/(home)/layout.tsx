import LandingOverlay from "@/components/LandingOverlay"

export default function HomeLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <main className="font-sans h-screen snap-y snap-mandatory overflow-y-scroll">
      {modal}

      <section className="h-screen snap-start snap-always">
        <LandingOverlay />
      </section>

      <section
        id="content"
        className="min-h-screen snap-start snap-always mx-auto max-w-[400px] px-4 pt-10 md:max-w-[700px]"
      >
        {children}
      </section>
    </main>
  )
}
