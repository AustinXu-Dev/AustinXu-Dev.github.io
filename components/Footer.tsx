'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, FileDown, Send, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch('https://formspree.io/f/mgopwpqz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formState),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        // Handle error — e.g. set an error state and show a message
        console.error('Formspree submission failed', await res.json())
      }
    } catch (err) {
      console.error('Network error', err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <footer id="contact" className="relative py-28 px-6">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <p className="text-accent text-sm font-medium font-mono uppercase tracking-widest">
              Contact
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-white/40 text-lg max-w-xl leading-relaxed">
            Open to full-time roles, contract work, and interesting problems.
            Reach out — I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full gap-4 p-8 bg-accent/5 border border-accent/15 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Send className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">Message sent!</p>
                  <p className="text-white/50 text-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs text-white/40 font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="px-4 py-3 bg-[#0a0a0a] border border-white/[0.08] rounded-lg text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent/30 focus:bg-[#0d0d0d] transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs text-white/40 font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="px-4 py-3 bg-[#0a0a0a] border border-white/[0.08] rounded-lg text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent/30 focus:bg-[#0d0d0d] transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs text-white/40 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role or project..."
                    className="px-4 py-3 bg-[#0a0a0a] border border-white/[0.08] rounded-lg text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent/30 focus:bg-[#0d0d0d] transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-black font-semibold rounded-lg hover:bg-accent-dim transition-all duration-200 shadow-[0_0_24px_rgba(0,255,159,0.2)] hover:shadow-[0_0_36px_rgba(0,255,159,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Links & info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between gap-8"
          >
            {/* Contact methods */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:austin.xu.me@gmail.com"
                className="flex items-center justify-between p-4 bg-[#0a0a0a] border border-white/[0.06] rounded-xl hover:border-accent/20 hover:bg-[#0d0d0d] transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5">Email</p>
                    <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      austin.xu.me@gmail.com
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-accent/60 transition-colors" />
              </a>

              <a
                href="https://github.com/AustinXu-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#0a0a0a] border border-white/[0.06] rounded-xl hover:border-accent/20 hover:bg-[#0d0d0d] transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center">
                    <Github className="w-4 h-4 text-white/70" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5">GitHub</p>
                    <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      github.com/AustinXu-Dev
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-accent/60 transition-colors" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#0a0a0a] border border-white/[0.06] rounded-xl hover:border-accent/20 hover:bg-[#0d0d0d] transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center">
                    <FileDown className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5">Resume</p>
                    <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      Download PDF
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-accent/60 transition-colors" />
              </a>
            </div>

            {/* Availability note */}
            <div className="p-4 border border-dashed border-white/10 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <p className="text-xs font-medium text-white/50">Available for opportunities</p>
              </div>
              <p className="text-xs text-white/25 leading-relaxed">
                Open to full-time engineering roles in iOS, backend systems, or full-stack.
                Interested in companies building meaningful, data-driven products.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-accent/10 border border-accent/20 flex items-center justify-center">
              <span className="text-accent font-mono text-xs font-bold">AX</span>
            </div>
            <p className="text-white/20 text-sm">Austin Xu</p>
          </div>
          <p className="text-white/15 text-xs font-mono">
            Built with Next.js & Tailwind CSS · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
