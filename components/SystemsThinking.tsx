'use client'

import { motion } from 'framer-motion'
import { Database, Cpu, TrendingUp, GitBranch, Layers, Activity } from 'lucide-react'

const stats = [
  {
    icon: Activity,
    value: '5+',
    label: 'Production Systems',
    sub: 'iOS, web, and data pipelines',
  },
  {
    icon: Database,
    value: '3',
    label: 'Data Pipelines',
    sub: 'Scraping → processing → insight',
  },
  {
    icon: Cpu,
    value: '2',
    label: 'ML Models Shipped',
    sub: 'XGBoost, Random Forest',
  },
  {
    icon: TrendingUp,
    value: 'Real-time',
    label: 'Architecture Focus',
    sub: 'Firebase, WebSockets, serverless',
  },
]

const systemPillars = [
  {
    icon: Database,
    title: 'Data Ingestion',
    description: 'Automated pipelines that collect, clean, and structure raw data from external sources.',
    accent: '#00ff9f',
  },
  {
    icon: Layers,
    title: 'Processing Layer',
    description: 'Feature engineering, ML model training, and business logic that transforms data into decisions.',
    accent: '#3b82f6',
  },
  {
    icon: GitBranch,
    title: 'Decision Support',
    description: 'Interfaces and systems that surface insights, reduce noise, and enable consistent action.',
    accent: '#8b5cf6',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function SystemsThinking() {
  return (
    <section id="systems" className="relative py-28 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[length:48px_48px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[140px] pointer-events-none" />

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
              Philosophy
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
            Building Systems for{' '}
            <span className="text-accent">Decision-Making</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            I don&apos;t just build apps that look good — I build systems that process
            real-world data, support decision-making, and optimize workflows. Every
            project starts with a question: what problem does this data solve?
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="relative p-5 bg-[#0a0a0a] border border-white/[0.06] rounded-xl group hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className="w-4 h-4 text-accent/60" />
                  <div className="w-1 h-1 rounded-full bg-accent/40" />
                </div>
                <p className="text-2xl font-black text-white mb-1">{stat.value}</p>
                <p className="text-xs font-semibold text-white/60 mb-0.5">{stat.label}</p>
                <p className="text-xs text-white/25">{stat.sub}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* System pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16"
        >
          {systemPillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="relative p-6 bg-[#0a0a0a] border border-white/[0.06] rounded-xl overflow-hidden group hover:border-white/10 transition-all duration-300"
              >
                {/* Connector line */}
                {i < systemPillars.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2.5 w-5 h-px bg-white/10 z-20" />
                )}

                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${pillar.accent}10`, border: `1px solid ${pillar.accent}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: pillar.accent }} />
                </div>

                {/* Step number */}
                <p className="text-xs font-mono text-white/20 mb-1">0{i + 1}</p>
                <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{pillar.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Projects that exemplify this */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-accent/[0.04] border border-accent/15 rounded-xl"
        >
          <p className="text-xs font-mono text-accent/60 uppercase tracking-widest mb-3">
            Systems in this portfolio
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Trading Analytics System → behavioral consistency tracking',
              'Option Mispricing Detection → ML pipeline for market edge',
              'Smart AC Platform → automated dispatch & coordination',
              'Snap N Go → real-time data sync & ML image pipeline',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-white/50"
              >
                <span className="text-accent">—</span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
