'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Resume() {
  return (
    <>
      <Header showHomeLink={true} />

      <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">Resume</h1>
      <h2 className="text-base font-medium tracking-tight text-foreground">
        my professional experience and skills.
      </h2>

      <p className="pt-4 text-sm font-normal text-foreground">
        This is a placeholder for the resume page. In a real implementation, this would contain Salim's resume or redirect to a PDF download.
      </p>

      <Footer />
    </>
  )
}
