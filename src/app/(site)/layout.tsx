export default function SiteLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <main className="mx-auto max-w-[400px] px-4 pt-10 md:max-w-[700px]">
        {children}
      </main>
    );
  }
  