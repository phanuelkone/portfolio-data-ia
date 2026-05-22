'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

type MotionRevealProps = PropsWithChildren<{
  className?: string
  delay?: number
}>

export function MotionReveal({
  children,
  className,
  delay = 0,
}: MotionRevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }}
      whileInView={
        reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }
      }
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
