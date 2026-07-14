import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Users, TrendingUp } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export const Route = createFileRoute('/course')({
  component: CoursePage,
})

// Update once the final course name is confirmed.
const COURSE_TITLE_PLACEHOLDER = '[Course Name Placeholder]'

// Value cards — Change 4: lighter tan fill (gold-light/15)
const valueCards = [
  {
    icon: Sparkles,
    heading: 'Skills and knowledge',
    body: (
      <>
        You'll learn to use AI tools like Claude, ChatGPT, and Gemini the way professionals do:
        designing workflows, evaluating outputs, and building real solutions to real problems.{' '}
        <strong className="font-semibold text-lab-black">
          No coding required to start, and no experience needed at all.
        </strong>
      </>
    ),
  },
  {
    icon: Users,
    heading: 'Who this is for',
    body: (
      <>
        Every major, every background. Whether you're in computer science, business, the arts, or
        still deciding, if you're curious and willing to work, you belong here.{' '}
        <strong className="font-semibold text-lab-black">
          The students who learn this now will be the ones who stand out later.
        </strong>
      </>
    ),
  },
  {
    icon: TrendingUp,
    heading: 'Why it matters',
    body: (
      <>
        AI fluency is quickly becoming expected in every field, for every role. Learning to use
        these tools well is no longer optional.{' '}
        <strong className="font-semibold text-lab-black">
          One credit hour now, for an edge that follows you into every interview, every resume,
          and your career.
        </strong>
      </>
    ),
  },
]

// Curriculum phases — Change 3: restored fuller format with two-column bullets
const phases = [
  {
    number: 1,
    sessions: 'SESSIONS 1-6',
    title: 'Shared Foundations',
    description:
      'Learn the fundamentals of working with AI tools well. No code and no experience needed.',
    topics: [
      'Writing clear, effective prompts',
      'Understanding how AI models actually work',
      'Designing repeatable AI workflows',
      'Bringing in your own documents and data',
      "Judging when to trust an AI's answer",
      'Using AI responsibly and ethically',
    ],
  },
  {
    number: 2,
    sessions: 'SESSIONS 7-12',
    title: 'Building With AI',
    description:
      'Go further and see how AI gets built into real tools and systems. The depth adjusts to your background, whether you code or not.',
    topics: [
      'Connecting AI to other apps (working with APIs)',
      'Giving AI tools to take real actions, not just answer',
      'Using AI as your coding assistant',
      'Keeping automated AI systems safe and reliable',
      'Combining multiple steps into larger workflows',
      'Testing AI systems to make sure they work',
    ],
  },
  {
    number: 3,
    sessions: 'SESSIONS 13-14',
    title: 'Synthesis and Showcase',
    description:
      'Bring everything together, propose a real project, and present what you built.',
    topics: [
      'Proposing your final project',
      'Getting feedback from your peers',
      'Presenting your work',
      'Getting ready for the Spring AI Impact Clinic',
    ],
  },
]

function CoursePage() {
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
            Fall 2026 Course
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="heading-display text-white mb-6"
          >
            {COURSE_TITLE_PLACEHOLDER}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/60 text-xl max-w-xl leading-relaxed"
          >
            The starting point of the AI Impact Clinic. One credit hour. Open to every major.
          </motion.p>
        </div>
      </section>

      {/*
        Stats strip removed (Change 1).
        Hero now flows directly into the value cards section.
        border-t border-lab-gold provides a refined gold accent at the transition.
      */}

      {/* Value cards — Change 2: max-w-6xl; Change 4: bg-lab-gold-light/15 */}
      <section className="bg-white border-t border-lab-gold section-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueCards.map((card, i) => {
              const Icon = card.icon
              return (
                <AnimatedSection key={card.heading} delay={i * 0.1}>
                  <div className="bg-lab-gold-light/15 border border-lab-gold rounded-xl p-7 h-full flex flex-col">
                    <div className="w-10 h-10 rounded-lg bg-lab-gold/15 flex items-center justify-center mb-5 shrink-0">
                      <Icon size={20} className="text-lab-gold" />
                    </div>
                    <h2 className="heading-card text-lab-black mb-3">{card.heading}</h2>
                    <p className="text-lab-charcoal text-base leading-relaxed">{card.body}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Curriculum — Change 2: max-w-6xl; Change 3: restored fuller format */}
      <section className="bg-lab-off-white border-t border-lab-warm-gray section-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="eyebrow mb-5">Curriculum</p>
            <h2 className="heading-section text-lab-black mb-12">
              Curriculum overview.
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {phases.map((phase, i) => (
              <AnimatedSection key={phase.title} delay={i * 0.1}>
                <div className="bg-white border border-lab-warm-gray rounded-xl p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                    {/* Gold number badge */}
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lab-gold text-lab-black font-bold text-sm font-display shrink-0">
                      {phase.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="heading-card text-lab-black">{phase.title}</h3>
                        {/* Sessions pill */}
                        <span className="text-xs font-semibold uppercase tracking-widest text-lab-medium-gray border border-lab-warm-gray rounded-full px-3 py-1">
                          {phase.sessions}
                        </span>
                      </div>
                      <p className="text-lab-charcoal leading-relaxed mb-5">
                        {phase.description}
                      </p>
                      {/* Two-column bullet list; single column on mobile */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                        {phase.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2 text-sm text-lab-charcoal">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lab-gold shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/*
        PLACEHOLDER: Full syllabus goes here. Replace this section with a link to the
        syllabus PDF or an embedded/downloadable syllabus once it is finalized.
      */}
      {/* Full syllabus — placeholder */}
      <section className="bg-white border-t border-lab-warm-gray section-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="eyebrow mb-5">Syllabus</p>
            <h2 className="heading-section text-lab-black mb-4">
              Full syllabus.
            </h2>
            <p className="text-lab-charcoal text-lg leading-relaxed mb-8">
              The complete course syllabus will be available here soon.
            </p>
            <button
              disabled
              className="inline-flex items-center gap-2 px-8 py-4 bg-lab-warm-gray text-lab-medium-gray
                         font-semibold rounded text-base cursor-not-allowed"
            >
              View Syllabus
              <ArrowRight size={18} />
            </button>
            <p className="mt-3 text-sm text-lab-medium-gray">Coming soon.</p>
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
