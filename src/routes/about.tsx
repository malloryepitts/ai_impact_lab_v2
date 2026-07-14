import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

// PLACEHOLDER: Verify the exact names of all three institutions with the faculty lead
// before this page goes live. Especially "The Office of the Provost" — confirm
// the exact office name and title used officially at Wake Forest.
const institutions = [
  'Wake Forest Department of Computer Science',
  'The Office of the Provost', // PLACEHOLDER: confirm exact office/title
  'Wake Forest School of Business',
]

function AboutPage() {
  return (
    <>
      {/* Page header — dark with grid */}
      <section className="relative py-32 bg-[#111111] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            The Initiative
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="heading-display text-white mb-6"
          >
            What is the AI Impact Clinic?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/60 text-xl max-w-xl leading-relaxed"
          >
            {/*
              PLACEHOLDER: The "broader AI initiative at Wake Forest" framing below is
              intentionally vague. Verify exact wording with the faculty lead before publishing.
            */}
            The AI Impact Clinic is part of a broader AI initiative at Wake Forest University. It's a
            newer, pilot-stage effort, and we're excited to see where it goes. The Clinic follows a
            simple path: it starts with a fall course open to every major, and continues into a
            selective spring program where student teams work with real organizations.
          </motion.p>
        </div>
      </section>

      {/*
        PLACEHOLDER: The paragraph below is intentionally vague about the broader WFU AI
        initiative. Verify exact framing and any specific details with Dr. Pauca before launch.
      */}
      {/* Part of something bigger — moved before the linking cards */}
      <section className="bg-lab-off-white border-t border-lab-gold section-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="eyebrow mb-5">Part of something bigger</p>
            <h2 className="heading-section text-lab-black mb-6">
              Part of something bigger.
            </h2>
            <p className="text-lab-charcoal text-lg leading-relaxed max-w-2xl">
              The AI Impact Clinic is one part of a broader AI initiative taking shape at Wake Forest
              University, an effort spanning multiple schools and offices to help students across
              the university engage with AI thoughtfully and effectively. The Clinic is an early,
              pilot-stage piece of that larger vision, and we're excited to see how it grows
              alongside the rest of the initiative.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Two linking cards */}
      <section className="bg-white border-t border-lab-warm-gray section-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <AnimatedSection>
              <Link
                to="/course"
                className="group block bg-lab-gold-light/15 border border-lab-gold rounded-xl p-8
                           motion-safe:transition-all motion-safe:duration-200
                           motion-safe:hover:-translate-y-1 hover:bg-lab-gold-light/25"
              >
                <p className="eyebrow mb-4">Fall</p>
                <h2 className="heading-card text-lab-black mb-3">The Course</h2>
                <p className="text-lab-charcoal leading-relaxed">
                  A one credit hour, pass/fail course open to every major. The starting point of
                  the AI Impact Clinic.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-lab-gold
                                 mt-6 group-hover:text-lab-gold-dark transition-colors duration-200">
                  Learn more <ArrowRight size={15} />
                </span>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Link
                to="/lab"
                className="group block bg-lab-gold-light/15 border border-lab-gold rounded-xl p-8
                           motion-safe:transition-all motion-safe:duration-200
                           motion-safe:hover:-translate-y-1 hover:bg-lab-gold-light/25"
              >
                <p className="eyebrow mb-4">Spring</p>
                <h2 className="heading-card text-lab-black mb-3">The AI Impact Clinic</h2>
                <p className="text-lab-charcoal leading-relaxed">
                  A selective continuation where student teams partner with real local organizations
                  to build and deploy AI solutions.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-lab-gold
                                 mt-6 group-hover:text-lab-gold-dark transition-colors duration-200">
                  Learn more <ArrowRight size={15} />
                </span>
              </Link>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Institutional credits */}
      <section className="bg-lab-off-white border-t border-lab-warm-gray section-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="eyebrow mb-8">Who's Behind It</p>
            {/* PLACEHOLDER: Verify exact official names for all three institutions with the faculty lead */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {institutions.map((name, i) => (
                <AnimatedSection key={name} delay={i * 0.08} className="h-full">
                  <div className="h-full bg-white border border-lab-warm-gray rounded-xl p-8 flex flex-col justify-center">
                    <p className="text-lab-black font-semibold text-base leading-snug">{name}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Apply CTA — dark */}
      <section className="bg-[#111111] section-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="heading-section text-white mb-4">
              Applications are open.
            </h2>
            <p className="text-white/60 text-lg mb-10">
              All majors welcome. No experience required.
            </p>
            <Link to="/apply" className="btn-primary">
              Apply Now
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
