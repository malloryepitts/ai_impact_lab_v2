import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { BookOpen, FlaskConical, Rocket, ArrowRight, ArrowDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GoldBorderSVG } from '@/components/ui/GoldBorderSVG'

export const Route = createFileRoute('/')({
  component: HomePage,
})

/* ── Step arrow: line + arrowhead, direction-aware ───────────────────────── */
function StepArrow() {
  return (
    <>
      {/* Desktop: horizontal line + arrowhead */}
      <div className="hidden md:flex items-center shrink-0 w-16">
        <div className="flex-1 h-[1.5px] bg-white/20" />
        <ArrowRight size={22} className="text-white/35 shrink-0 -ml-0.5" />
      </div>
      {/* Mobile: vertical line + arrowhead */}
      <div className="md:hidden flex flex-col items-center py-3">
        <div className="w-[1.5px] h-10 bg-white/20" />
        <ArrowDown size={22} className="text-white/35 -mt-0.5" />
      </div>
    </>
  )
}

/* ── Home page ───────────────────────────────────────────────────────────── */
function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const [gridOpacity, setGridOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current
      if (!hero) return
      const heroHeight = hero.offsetHeight
      const scrolled = window.scrollY
      const progress = Math.min(scrolled / heroHeight, 1)
      setGridOpacity(1 - progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Section 1 — Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-[#111111] flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            opacity: gridOpacity,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-32">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6"
          >
            Wake Forest University
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="heading-display text-white mb-8"
          >
            AI is for everyone. Learn to use it well.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-2xl mb-12"
          >
            The AI Impact Lab at Wake Forest teaches students across every major to use AI tools effectively, responsibly, and with purpose. One credit hour. No experience required.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/course" className="btn-primary">
              Learn About the Course
              <ArrowRight size={18} />
            </Link>
            <Link to="/apply" className="btn-outline-dark">
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sections 2 + 3 merged — two-column editorial band */}
      <section className="bg-lab-gold-light border-t border-lab-gold section-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">

            {/* Left column */}
            <div className="flex-1 md:pr-12">
              <AnimatedSection>
                <h2 className="heading-section text-lab-black mb-6 text-3xl md:text-4xl">
                  AI fluency is the new baseline.
                </h2>
                <p className="text-lab-charcoal text-lg leading-relaxed">
                  In a few years, knowing how to work with AI won't be a bonus on your resume. It will be expected, in every field, for every role. The students who learn to use these tools well now will have a valuable edge that's hard to catch up to later.
                </p>
              </AnimatedSection>
            </div>

            {/* Divider: horizontal on mobile, vertical on desktop */}
            <div className="my-10 h-px md:my-0 md:h-auto md:w-px bg-lab-gold shrink-0" />

            {/* Right column */}
            <div className="flex-1 md:pl-12">
              <AnimatedSection delay={0.1}>
                <h2 className="heading-section text-lab-black mb-6 text-3xl md:text-4xl">
                  One credit hour. No experience required.
                </h2>
                <p className="text-lab-charcoal text-lg leading-relaxed">
                  The course is one credit hour, pass/fail, and application-based. It's open to students of every major, with no prior experience needed. Just show up curious and ready to work.
                </p>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4 — What you'll walk away with */}
      <section className="bg-white border-t border-lab-gold section-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated gold border wraps the content block */}
          <div className="relative rounded-xl p-8 md:p-10">
            <GoldBorderSVG />
            <AnimatedSection>
              <h2 className="heading-section text-lab-black mb-8 text-3xl md:text-4xl">
                Real skills. Real projects. Something to talk about.
              </h2>
              <ul className="space-y-4 max-w-2xl">
                {[
                  'Confidence using tools like Claude, ChatGPT, and Gemini for work that actually matters',
                  'Repeatable AI workflows you can bring to any class, job, or team',
                  'The judgment to know when to trust AI and when not to',
                  'Hands-on projects you can reference in interviews and on your resume',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2 w-2 h-2 rounded-sm bg-lab-gold shrink-0" />
                    <span className="text-lab-charcoal text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 5 — The path */}
      <section className="bg-[#111111] section-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="eyebrow mb-6">How it works</p>
            <h2 className="heading-section text-white mb-14 text-3xl md:text-4xl">
              The AI Impact Lab Track.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-stretch">

              {/* Card 1 — The Course (linked) */}
              <Link
                to="/course"
                className="flex-1 bg-[#222222] border border-white/10 rounded-xl p-6
                           motion-safe:transition-all motion-safe:duration-200
                           motion-safe:hover:-translate-y-1 motion-safe:hover:border-white/25"
              >
                <div className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center mb-4">
                  <BookOpen size={20} className="text-lab-gold" />
                </div>
                <p className="eyebrow mb-2">Step One · Fall</p>
                <h3 className="heading-card text-white mb-2">The Course</h3>
                <p className="text-white/65 text-base leading-relaxed">
                  A one credit hour, pass/fail course open to students of every major. No prior experience required. Learn to use AI tools with real skill and build projects you care about.
                </p>
              </Link>

              <StepArrow />

              {/* Card 2 — The Impact Lab (linked) */}
              <Link
                to="/lab"
                className="flex-1 bg-[#222222] border border-white/10 rounded-xl p-6
                           motion-safe:transition-all motion-safe:duration-200
                           motion-safe:hover:-translate-y-1 motion-safe:hover:border-white/25"
              >
                <div className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center mb-4">
                  <FlaskConical size={20} className="text-lab-gold" />
                </div>
                <p className="eyebrow mb-2">Step Two · Spring</p>
                <h3 className="heading-card text-white mb-2">The Impact Lab</h3>
                <p className="text-white/65 text-base leading-relaxed">
                  A selective continuation for students who complete the course. Work on a small team paired with a real local organization to design and deploy an AI solution to a genuine business challenge.
                </p>
              </Link>

              <StepArrow />

              {/* Card 3 — What you gain (not linked, no hover) */}
              <div className="flex-1 bg-[#222222] border border-white/10 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center mb-4">
                  <Rocket size={20} className="text-lab-gold" />
                </div>
                <p className="eyebrow mb-2">What You Gain</p>
                <h3 className="heading-card text-white mb-2">Your future</h3>
                <p className="text-white/65 text-base leading-relaxed">
                  Hands-on experience, real projects, and AI fluency that stands out on any resume and in any interview. Skills that carry into whatever you do next.
                </p>
              </div>

            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-14 flex flex-col items-center gap-3 text-center">
              <Link to="/apply" className="btn-primary">
                Apply Now
                <ArrowRight size={18} />
              </Link>
              <p className="text-white/50 text-sm">Open to all majors. No experience required.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
