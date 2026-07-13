import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

interface ApplyCTAProps {
  headline?: string
  subtext?: string
}

export function ApplyCTA({
  headline = 'Applications are now open.',
  subtext = 'Open to students of all majors. No prior experience required.',
}: ApplyCTAProps) {
  return (
    <section className="bg-[#111111] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
          {headline}
        </h2>
        <p className="text-white/60 text-lg mb-10">{subtext}</p>
        <Link
          to="/apply"
          className="btn-primary"
        >
          Apply Now
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
