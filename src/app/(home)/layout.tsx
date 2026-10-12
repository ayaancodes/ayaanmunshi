export default function HomeLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <main className="font-sans mx-auto max-w-[400px] px-4 pt-10 md:max-w-[700px]">
      {modal}
      {children}
    </main>
  )
}
