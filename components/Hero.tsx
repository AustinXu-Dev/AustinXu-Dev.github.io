'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, ExternalLink } from 'lucide-react'

const techStack = [
  { label: 'Swift', color: '#F05138' },
  { label: 'Laravel', color: '#FF2D20' },
  { label: 'Next.js', color: '#ffffff' },
  { label: 'Vue.js', color: '#42b883' },
  { label: 'Python', color: '#3776AB' },
  { label: 'AWS', color: '#FF9900' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:48px_48px] [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Open to full-time opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
        >
          <span className="text-white">Austin </span>
          <span className="text-accent">Xu</span>
        </motion.h1>

        {/* Headline */}
        <motion.h2
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 mb-5 tracking-tight"
        >
          Building systems,{' '}
          <span className="text-white/40">not just apps.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Full-stack developer focused on iOS, Laravel, and data-driven tools.
          I architect real-time systems, data pipelines, and mobile applications
          that solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-2 px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent-dim transition-all duration-200 shadow-[0_0_24px_rgba(0,255,159,0.25)] hover:shadow-[0_0_36px_rgba(0,255,159,0.4)]"
          >
            View Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <a
            href="https://github.com/austinxu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 text-white/70 font-medium rounded-lg hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            GitHub Profile
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-white/25 text-xs uppercase tracking-widest font-medium">
            Primary Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech.label}
                className="px-3 py-1.5 rounded-md border border-white/8 bg-white/[0.03] text-xs font-mono font-medium"
                style={{ color: tech.color }}
              >
                {tech.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-xs tracking-widest uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  )
}
