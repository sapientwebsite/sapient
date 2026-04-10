import type { HTMLMotionProps } from 'framer-motion'
import type { Variants } from 'framer-motion'

export const fadeInView: Pick<
  HTMLMotionProps<'div'>,
  'initial' | 'whileInView' | 'transition' | 'viewport'
> = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, amount: 0.2 },
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
}
