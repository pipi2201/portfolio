import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { LegalId } from '../content'
import { useLang } from '../i18n'

/** Impressum and privacy notice in a native <dialog>, so the page stays a true single pager. */
export function LegalDialog({ open, onClose }: { open: LegalId | null; onClose: () => void }) {
  const { t } = useLang()
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const doc = open ? t.legal[open] : null

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      aria-labelledby="legal-title"
      className="m-auto max-h-[85dvh] w-[min(40rem,calc(100%-2rem))] rounded-3xl bg-paper p-0 font-sans text-ink shadow-2xl backdrop:bg-ink/50 backdrop:backdrop-blur-sm"
    >
      {doc && (
        <div className="p-7 sm:p-10">
          <div className="flex items-start justify-between gap-6">
            <h2 id="legal-title" className="font-editorial text-4xl">
              {doc.title}
            </h2>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label={t.legal.close}
              className="grid size-10 shrink-0 place-items-center rounded-full transition hover:bg-ink/5"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="mt-8 space-y-6">
            {doc.blocks.map((block) => (
              <section key={block.heading}>
                <h3 className="text-sm font-semibold">{block.heading}</h3>
                <div className="mt-1.5 space-y-1 leading-relaxed text-ink/70">
                  {block.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      )}
    </dialog>
  )
}
