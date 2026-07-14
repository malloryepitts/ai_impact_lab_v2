import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  ArrowRight, Sparkles, Users, TrendingUp,
  Terminal, Cpu, Zap, FileText, Scale, Shield,
  Plug, Bot, Code2, Lock, GitMerge, CheckCircle2,
  Lightbulb, MessageCircle, Monitor, Rocket,
  CalendarDays,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ParticleCanvas } from '@/components/ui/ParticleCanvas'

export const Route = createFileRoute('/course')({
  component: CoursePage,
})

// Update once the final course name is confirmed.
const COURSE_TITLE_PLACEHOLDER = '[Course Name Placeholder]'

/* ── Value cards ─────────────────────────────────────────────────────────── */
const valueCards = [
  {
    icon: Sparkles,
    heading: 'Professional-grade skills',
    body: (
      <>
        You'll learn to use AI tools like Claude the way professionals do:
        designing workflows, evaluating outputs, and building real solutions to real problems.{' '}
        <strong className="font-semibold text-lab-black">
          No coding required to start, and no experience needed at all.
        </strong>
      </>
    ),
  },
  {
    icon: Users,
    heading: 'Every major. Every background.',
    body: (
      <>
        Whether you're in computer science, business, the arts, or still deciding,
        if you're curious and willing to work, you belong here.{' '}
        <strong className="font-semibold text-lab-black">
          The students who learn this now will be the ones who stand out later.
        </strong>
      </>
    ),
  },
  {
    icon: TrendingUp,
    heading: 'An edge that lasts',
    body: (
      <>
        AI fluency is quickly becoming expected in every field, for every role. Learning to use
        these tools well is no longer optional.{' '}
        <strong className="font-semibold text-lab-black">
          1.5 credit hours now, for an edge that follows you into every interview, every resume,
          and your career.
        </strong>
      </>
    ),
  },
]

/* ── Curriculum phases ───────────────────────────────────────────────────── */
interface Topic {
  icon: LucideIcon
  text: string
}

interface Phase {
  number: number
  sessions: string
  title: string
  description: string
  topics: Topic[]
}

const phases: Phase[] = [
  {
    number: 1,
    sessions: 'SESSIONS 1-6',
    title: 'Shared Foundations',
    description: 'No code or experience needed. Learn to work with AI the way professionals do.',
    topics: [
      { icon: Terminal,  text: 'Write prompts that get you exactly what you want' },
      { icon: Cpu,       text: 'Understand what AI is really doing, so you can push it further' },
      { icon: Zap,       text: 'Build workflows that do hours of work in minutes' },
      { icon: FileText,  text: 'Put your own documents and data to work' },
      { icon: Scale,     text: "Learn when to trust AI, and when it's confidently wrong" },
      { icon: Shield,    text: 'Use AI responsibly, and know where the limits are' },
    ],
  },
  {
    number: 2,
    sessions: 'SESSIONS 7-12',
    title: 'Building With AI',
    description: 'Go deeper. See how AI connects to real tools and systems, whether you code or not.',
    topics: [
      { icon: Plug,         text: 'Connect AI to real apps and data so it can act, not just chat' },
      { icon: Bot,          text: 'Create AI agents that carry out tasks on their own' },
      { icon: Code2,        text: 'Build real things with AI as your coding partner' },
      { icon: Lock,         text: 'Keep automated AI systems safe and under control' },
      { icon: GitMerge,     text: 'Chain multiple steps into powerful workflows' },
      { icon: CheckCircle2, text: 'Test AI systems so you know they actually work' },
    ],
  },
  {
    number: 3,
    sessions: 'SESSIONS 13-14',
    title: 'Synthesis and Showcase',
    description: 'Bring it all together, pitch something real, and show what you built.',
    topics: [
      { icon: Lightbulb,     text: 'Pitch a real project you care about' },
      { icon: MessageCircle, text: 'Sharpen it with feedback from your peers' },
      { icon: Monitor,       text: 'Present what you built' },
      { icon: Rocket,        text: 'Get ready for the Spring AI Impact Clinic' },
    ],
  },
]

function CoursePage() {
  return (
    <>
      {/* Page header — dark with grid + particle canvas */}
      <section className="relative py-32 bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* Animated particle network — hidden when prefers-reduced-motion */}
          <ParticleCanvas />
        </div>
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
            The starting point of the AI Impact Clinic. 1.5 credit hours. Open to every major.
          </motion.p>
        </div>
      </section>

      {/* ── PLACEHOLDER: Quick-access logistics bar ──────────────────────────────
           Wire up href values below once resources are available.
           · Schedule: link to course calendar or schedule PDF
           · Syllabus: link to syllabus PDF (consolidates the syllabus section)
           · Apply Now: live link to /apply
           ──────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lab-gold shrink-0 sm:mr-6">
              Quick Access Links
            </p>
            <div className="hidden sm:block w-px h-5 bg-white/10 mr-6" />
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <button
                type="button"
                disabled
                className="flex items-center gap-2 text-base font-medium text-white/45 cursor-not-allowed"
                aria-label="Course schedule — coming soon"
              >
                <CalendarDays size={17} className="shrink-0" />
                <span>Schedule</span>
                <span className="text-white/25 font-normal text-sm">[coming soon]</span>
              </button>
              <button
                type="button"
                disabled
                className="flex items-center gap-2 text-base font-medium text-white/45 cursor-not-allowed"
                aria-label="Syllabus — coming soon"
              >
                <FileText size={17} className="shrink-0" />
                <span>Syllabus</span>
                <span className="text-white/25 font-normal text-sm">[coming soon]</span>
              </button>
              <Link
                to="/apply"
                className="flex items-center gap-2 text-base font-semibold text-lab-gold hover:text-lab-gold-dark transition-colors duration-200"
              >
                Apply Now
                <ArrowRight size={17} className="shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value cards */}
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

      {/* Curriculum */}
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
                      {/* Two-column bullet list with tech icons; single column on mobile */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                        {phase.topics.map((topic) => {
                          const TopicIcon = topic.icon
                          return (
                            <li key={topic.text} className="flex items-start gap-2.5 text-sm text-lab-charcoal">
                              <TopicIcon size={14} className="text-lab-gold mt-0.5 shrink-0" />
                              {topic.text}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLACEHOLDER: Full syllabus ───────────────────────────────────────────
           Replace this section with a link to the syllabus PDF (or embedded syllabus)
           once it is finalized. The quick-access bar above also carries a syllabus link.
           ──────────────────────────────────────────────────────────────────────────── */}
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
