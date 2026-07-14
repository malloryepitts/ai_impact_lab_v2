import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { LINKS } from '@/lib/links'

export const Route = createFileRoute('/apply')({
  component: ApplyPage,
})

function ApplyPage() {
  const hasForm = Boolean(LINKS.applicationForm)

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
            Apply
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-semibold text-white leading-tight mb-6"
          >
            Apply for the Fall Course
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-xl max-w-2xl leading-relaxed"
          >
            We are looking for curious, motivated students from every background and major.
          </motion.p>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-lab-gold text-sm font-semibold uppercase tracking-widest mb-4">The Process</p>
            <h2 className="font-display text-3xl font-semibold text-lab-black mb-6">What to expect.</h2>
            <div className="space-y-4 text-lab-charcoal leading-relaxed text-base">
              <p>
                The AI Impact Clinic course is application-based and selective. We admit students who show genuine curiosity, a willingness to engage deeply, and an interest in the practical application of AI tools across real problems.
              </p>
              <p>
                The course is open to all majors and all class years. No prior technical experience is required or expected. We actively seek a diverse cohort: different majors, different perspectives, and different ways of thinking about problems.
              </p>
              <p>
                The application asks about your background, your motivations, and how you think about a specific challenge. There are no right answers. We are looking for thoughtfulness and authenticity.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="bg-lab-off-white py-16 border-t border-lab-warm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {hasForm ? (
              <div>
                <p className="text-lab-gold text-sm font-semibold uppercase tracking-widest mb-4">Application Form</p>
                <iframe
                  src={LINKS.applicationForm}
                  width="100%"
                  style={{ minHeight: '800px', border: 'none' }}
                  title="AI Impact Clinic Application Form"
                  allow="camera; microphone"
                />
                <p className="mt-4 text-sm text-lab-medium-gray text-center">
                  Form not loading?{' '}
                  <a
                    href={LINKS.applicationForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-lab-gold hover:text-lab-gold-dark underline underline-offset-2"
                  >
                    Open in a new tab <ExternalLink size={13} />
                  </a>
                </p>
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-lab-gold/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-lab-gold font-display font-semibold">?</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-lab-black mb-3">Applications opening soon.</h3>
                <p className="text-lab-charcoal text-base max-w-md mx-auto leading-relaxed">
                  The application form will be live here shortly. Check back soon or reach out to the AI Impact Clinic team for more information.
                </p>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
