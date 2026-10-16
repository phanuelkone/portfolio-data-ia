import * as React from 'react'
import { cn } from '@/lib/utils'

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'portfolio-card rounded-2xl border border-white/10 bg-white/[0.025] transition duration-300',
        className,
      )}
      {...props}
    />
  )
}
