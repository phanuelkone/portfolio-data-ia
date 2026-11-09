'use client';
import { motion, useReducedMotion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
export function MotionReveal({ children, className, delay = 0 }: PropsWithChildren<{
    className?: string;
    delay?: number;
}>) {
    const reduced = useReducedMotion();
    return (<motion.div initial={false} whileInView={reduced ? undefined : { opacity: [0.8, 1], y: [12, 0] }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>);
}
