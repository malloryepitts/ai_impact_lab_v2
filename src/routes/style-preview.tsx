import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/style-preview')({
  component: StylePreviewPage,
})

const EYEBROW = 'WHY IT MATTERS'
const TITLE = 'AI fluency is the new baseline.'
const BODY =
  "In a few years, knowing how to work with AI won't be a bonus on your resume. It will be expected, in every field, for every role. The students who learn to use these tools well now will have an edge that's hard to catch up to later. This is where you build it."

function OptionLabel({ letter, name }: { letter: string; name: string }) {
  return (
    <div className="bg-lab-black py-3 px-6 sticky top-16 z-40 border-b border-white/10">
      <div className="max-w-5xl mx-auto flex items-center gap-3">
        <span className="font-display font-semibold text-lab-gold text-lg">Option {letter}</span>
        <span className="text-white/40 text-sm">{name}</span>
      </div>
    </div>
  )
}

/* ── Option A: Big gold number + gold rule, in a soft card ─────────────── */
function OptionA() {
  return (
    <section className="bg-lab-off-white section-lg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-lab-warm-gray rounded-2xl p-10 md:p-14">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            {/* Large serif gold number */}
            <div className="shrink-0 leading-none">
              <span className="font-display font-bold text-lab-gold"
                style={{ fontSize: 'clamp(5rem, 10vw, 7rem)', lineHeight: 1 }}>
                01
              </span>
            </div>
            {/* Content: gold rule → title → body */}
            <div className="flex-1">
              <div className="w-10 h-0.5 bg-lab-gold mb-7" />
              <h2 className="heading-section text-lab-black mb-6">{TITLE}</h2>
              <p className="text-lab-charcoal text-lg leading-relaxed">{BODY}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Option B: Centered — eyebrow, title, gold rule, then body ─────────── */
function OptionB() {
  return (
    <section className="bg-white section-lg">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow — written inline so we can center it cleanly without the ::before rule */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lab-gold mb-5">
          {EYEBROW}
        </p>
        <h2 className="heading-section text-lab-black">{TITLE}</h2>
        {/* Gold rule centered directly under the title */}
        <div className="w-12 h-0.5 bg-lab-gold mx-auto mt-6 mb-8" />
        <p className="text-lab-charcoal text-lg leading-relaxed">{BODY}</p>
      </div>
    </section>
  )
}

/* ── Option C: Two-column split, thin gold rule across the top ─────────── */
function OptionC() {
  return (
    <section className="bg-white section-lg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width gold rule at the top */}
        <div className="w-full h-px bg-lab-gold mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: eyebrow + title */}
          <div>
            <p className="eyebrow mb-5">{EYEBROW}</p>
            <h2 className="heading-section text-lab-black">{TITLE}</h2>
          </div>
          {/* Right: body, vertically aligned near top of title */}
          <div className="md:pt-14">
            <p className="text-lab-charcoal text-lg leading-relaxed">{BODY}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Option D: Gold feature band — inverted colors ─────────────────────── */
function OptionD() {
  return (
    <section className="bg-lab-gold section-lg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow in dark tone — gold-on-gold doesn't work, use black/60 */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lab-black/60 mb-5">
          {EYEBROW}
        </p>
        <h2 className="heading-section text-lab-black mb-6">{TITLE}</h2>
        <p className="text-lab-black/75 text-lg leading-relaxed">{BODY}</p>
      </div>
    </section>
  )
}

/* ── Preview page ──────────────────────────────────────────────────────── */
function StylePreviewPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="bg-lab-black py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-3xl font-semibold text-white mb-3">
            Style Preview — Sections 2–4
          </h1>
          <p className="text-white/55 text-base">
            Four treatments, same content. Scroll through to compare, then tell me which one to apply.
          </p>
        </div>
      </div>

      <OptionLabel letter="A" name="Big gold number + rule, inside a soft card" />
      <OptionA />

      <OptionLabel letter="B" name="Centered — eyebrow, title, gold rule, then body" />
      <OptionB />

      <OptionLabel letter="C" name="Two-column split + full-width gold rule across the top" />
      <OptionC />

      <OptionLabel letter="D" name="Gold feature band (inverted — dark text on gold)" />
      <OptionD />
    </div>
  )
}
