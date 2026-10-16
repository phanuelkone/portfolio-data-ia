import * as React from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4',
        variant === 'primary' &&
          'bg-[#b8f3d5] !text-zinc-950 shadow-[0_8px_30px_rgba(184,243,213,0.08)] hover:-translate-y-0.5 hover:bg-[#d2fbe5] focus-visible:outline-white',
        variant === 'secondary' &&
          'border border-white/15 bg-white/[0.06] text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1] focus-visible:outline-white',
        variant === 'ghost' &&
          'text-zinc-300 hover:bg-white/[0.06] hover:text-white focus-visible:outline-white',
        className,
      )}
      {...props}
    />
  )
}
