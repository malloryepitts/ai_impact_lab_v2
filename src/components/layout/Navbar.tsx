import { useState, useEffect } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Course', to: '/course' },
  { label: 'AI Impact Clinic', to: '/lab' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouterState()
  const pathname = router.location.pathname

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (to: string) => {
    if (to === '/') return pathname === '/'
    return pathname.startsWith(to)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-lab-warm-gray'
          : 'bg-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Wake Forest University"
              className="h-14 w-auto transition-all duration-300"
              style={{ filter: scrolled ? 'none' : 'invert(1)' }}
            />
            <span className="text-4xl font-bold tracking-tight">
              <span className="text-lab-gold">AI</span>
              <span className={cn(scrolled ? 'text-lab-black' : 'text-white')}> Impact Clinic</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'text-sm font-medium transition-colors duration-300',
                  isActive(link.to)
                    ? 'text-lab-gold'
                    : scrolled
                    ? 'text-lab-charcoal hover:text-lab-gold'
                    : 'text-white/80 hover:text-white',
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/apply"
              className="ml-2 px-5 py-2 rounded text-sm font-semibold bg-lab-gold text-lab-black hover:bg-lab-gold-dark hover:text-white transition-all duration-300"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              'md:hidden p-2 rounded transition-colors',
              scrolled ? 'text-lab-black' : 'text-white',
            )}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-lab-warm-gray overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'text-base font-medium transition-colors',
                    isActive(link.to) ? 'text-lab-gold' : 'text-lab-charcoal hover:text-lab-gold',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/apply"
                onClick={() => setMobileOpen(false)}
                className="inline-block px-5 py-2.5 rounded text-sm font-semibold bg-lab-gold text-lab-black text-center hover:bg-lab-gold-dark hover:text-white transition-all duration-300"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
