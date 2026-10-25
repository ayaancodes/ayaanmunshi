'use client'

import React from 'react'

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-[99999] pointer-events-auto">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className="w-full max-w-3xl rounded-2xl border border-white/10 bg-background p-6 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onClose()
              }}
              className="rounded-lg border border-white/10 px-3 py-1 text-sm text-foreground/80 hover:bg-white/5"
            >
              Close
            </button>
          </div>

          <div className="pt-4">{children}</div>
        </div>
      </div>
    </div>
  )
}
