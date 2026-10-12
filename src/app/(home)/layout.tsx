export default function HomeLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <main className="mx-auto max-w-content px-5 pt-12">
      {modal}
      {children}
    </main>
  )
}
