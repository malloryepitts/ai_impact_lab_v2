import { motion, useReducedMotion } from 'framer-motion'

interface GoldBorderSVGProps {
  /** Stroke thickness. Home page uses 1 (default); Course "Why it matters" uses 1.5. */
  strokeWidth?: number
}

export function GoldBorderSVG({ strokeWidth = 1 }: GoldBorderSVGProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <svg
        className="absolute inset-0 w-full h-full text-lab-gold pointer-events-none"
        aria-hidden="true"
        style={{ overflow: 'visible' }}
      >
        <rect
          x="0" y="0"
          width="100%" height="100%"
          rx={12}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
        />
      </svg>
    )
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full text-lab-gold pointer-events-none"
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <motion.rect
        x="0" y="0"
        width="100%" height="100%"
        rx={12}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{
          pathLength: { duration: 1.4, delay: 0.35, ease: [0.4, 0, 0.6, 1] },
          opacity: { duration: 0.01, delay: 0.35 },
        }}
      />
    </svg>
  )
}
