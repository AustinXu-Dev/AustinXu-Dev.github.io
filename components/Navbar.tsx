'use client'

import { useState, useEffect } from 'react'
import { Github, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Systems', href: '#systems' },
  { label: 'Skills', href: '#skills' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 rounded bg-accent/10 border border-accent/20 flex items-center justify-center">
            <span className="text-accent font-mono text-sm font-bold">AX</span>
          </div>
          <span className="text-white/80 font-medium group-hover:text-white transition-colors text-sm hidden sm:block">
            Austin Xu
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm text-white/60 hover:text-white rounded-md hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/AustinXu-Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm border border-white/10 rounded-md text-white/70 hover:text-white hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://github.com/austinxu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
