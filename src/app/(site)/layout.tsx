export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mx-auto max-w-content px-5 pt-12">{children}</main>
  )
}
