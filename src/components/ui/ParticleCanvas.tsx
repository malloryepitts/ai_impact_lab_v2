import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

/**
 * Floating connected-nodes canvas — tech background for dark hero sections.
 * Renders gold particles and connecting lines that drift slowly.
 * Returns null (renders nothing) when prefers-reduced-motion is set.
 */
export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    const initParticles = () => {
      // Denser count: one particle per ~9000px² of viewport, capped at 90
      const count = Math.max(40, Math.min(Math.floor((canvas.width * canvas.height) / 9000), 90))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
      }))
    }

    const GOLD = '158, 126, 56'
    const MAX_DIST = 165

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx) }
        if (p.x > canvas.width) { p.x = canvas.width; p.vx = -Math.abs(p.vx) }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy) }
        if (p.y > canvas.height) { p.y = canvas.height; p.vy = -Math.abs(p.vy) }
      }

      // Connections (drawn first, under dots)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distSq = dx * dx + dy * dy
          if (distSq < MAX_DIST * MAX_DIST) {
            const alpha = 0.38 * (1 - Math.sqrt(distSq) / MAX_DIST)
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${GOLD}, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // Dots
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${GOLD}, 0.85)`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(() => resize())
    resize()
    draw()
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [shouldReduceMotion])

  if (shouldReduceMotion) return null

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
