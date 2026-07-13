import { Link } from '@tanstack/react-router'
import { LINKS } from '@/lib/links'

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a1a1a' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold mb-2">
              <span className="text-lab-gold">AI</span> Impact Lab
            </div>
            <div className="text-sm text-white/60 mb-3">Wake Forest University</div>
            <p className="text-sm text-white/50 leading-relaxed">
              Building AI fluency across every major. Preparing students to use AI tools effectively, responsibly, and with purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Fall Course', to: '/course' },
                { label: 'Apply', to: '/apply' },
                { label: 'Spring Lab', to: '/lab' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/60 hover:text-lab-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-white/60">
              <p>Department of Computer Science</p>
              <p>Wake Forest University</p>
              <a
                href={LINKS.wfuMain}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-lab-gold transition-colors"
              >
                wfu.edu
              </a>
              <p className="mt-4 text-white/30 text-xs">
                Site maintained by the AI Impact Lab initiative.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/20">
          &copy; {new Date().getFullYear()} AI Impact Lab, Wake Forest University. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
