'use client'

import { useRouter } from 'next/navigation'
import Modal from '@/components/Modal'

export default function BlackjackModalPage() {
  const router = useRouter()

  const close = () => {
    router.back()
  }

  return (
    <Modal onClose={close}>
      <div className="text-center">
        <h2 className="text-xl font-medium text-primary">Blackjack</h2>
        <p className="mt-2 text-sm text-foreground/70">Under construction.</p>
      </div>
    </Modal>
  )
}
