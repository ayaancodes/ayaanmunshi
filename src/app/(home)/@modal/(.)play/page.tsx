'use client'

import Link from 'next/link'
import Modal from '@/components/Modal'

export default function BlackjackModalPage() {
  return (
    <Modal
      onClose={() => {
        // this can stay, but the Link below is the real closer
      }}
    >
      <div className="text-center">
        <h2 className="text-xl font-medium text-primary">Blackjack</h2>
        <p className="mt-2 text-sm text-foreground/70">Under construction.</p>

        <div className="mt-6 flex justify-center">
          <Link
            href="/"
            scroll={false}
            className="rounded-lg border border-white/10 px-3 py-1 text-sm text-foreground/80 hover:bg-white/5"
          >
            Close
          </Link>
        </div>
      </div>
    </Modal>
  )
}
