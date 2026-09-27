import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import { cn } from '../lib/cn'

type RevealProps = {
  as?: 'div' | 'li' | 'article' | 'p' | 'figure'
  delay?: number
  className?: string
  style?: CSSProperties
  children: ReactNode
}

/** Fades and lifts its content in when it scrolls into view. */
export function Reveal({ as = 'div', delay = 0, className, style, children }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>()
  const Tag = as as 'div'
  return (
    <Tag
      ref={ref}
      className={cn('reveal', inView && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  )
}
