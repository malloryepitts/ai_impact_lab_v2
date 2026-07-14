import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export const Route = createFileRoute('/lab')({
  component: LabPage,
})

function LabPage() {
  return (
    <>
      {/* Hero */}
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
            className="text-lab-gold text-sm font-semibold uppercase tracking-widest mb-5"
          >
            Spring Program
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-semibold text-white leading-tight mb-6"
          >
            The AI Impact Clinic
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-xl max-w-2xl leading-relaxed"
          >
            Coming in Spring 2027.
          </motion.p>
        </div>
      </section>

      {/* Teaser */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-lab-gold text-sm font-semibold uppercase tracking-widest mb-4">What it is</p>
            <h2 className="font-display text-4xl font-semibold text-lab-black mb-10 leading-tight max-w-2xl">
              Where coursework becomes real work.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            <AnimatedSection delay={0.1}>
              <div className="space-y-6 text-lab-charcoal leading-relaxed">
                <p>
                  The Spring AI Impact Clinic is a selective continuation of the fall course. Roughly 20 students are invited to participate, forming five teams of four or five.
                </p>
                <p>
                  Each team is matched with a real local organization in Winston-Salem - a business, nonprofit, or community partner - facing a genuine challenge where AI tools could create meaningful value.
                </p>
                <p>
                  Teams manage the full engagement: scoping the problem, designing a solution, building and testing it, and presenting findings to real stakeholders. Students leave with a portfolio piece unlike anything available through a standard academic track.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <ul className="space-y-5">
                {[
                  { label: 'Cohort size', value: 'Approximately 20 students' },
                  { label: 'Team structure', value: 'Five teams of 4-5 students' },
                  { label: 'Partners', value: 'Local Winston-Salem organizations' },
                  { label: 'Outcome', value: 'A deployed AI solution and client presentation' },
                  { label: 'Eligibility', value: 'Selected from fall course completers' },
                ].map((item) => (
                  <li key={item.label} className="border-b border-lab-warm-gray pb-4 last:border-0">
                    <div className="text-xs font-semibold uppercase tracking-widest text-lab-medium-gray mb-1">{item.label}</div>
                    <div className="text-lab-black font-medium">{item.value}</div>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lab-off-white py-20 border-t border-lab-warm-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h3 className="font-display text-3xl font-semibold text-lab-black mb-4">Start with the Fall Course.</h3>
            <p className="text-lab-charcoal leading-relaxed mb-8 text-base max-w-xl mx-auto">
              Spring Clinic selection is drawn from fall course completers. The path to the Clinic begins in the fall.
            </p>
            <Link
              to="/course"
              className="inline-flex items-center gap-2 px-8 py-4 bg-lab-gold text-lab-black font-semibold rounded hover:bg-lab-gold-dark hover:text-white transition-colors duration-200 text-base"
            >
              Learn About the Fall Course
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
