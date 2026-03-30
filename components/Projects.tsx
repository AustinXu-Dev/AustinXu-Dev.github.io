'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

interface Project {
  id: string
  category: string
  title: string
  description: string
  highlights: string[]
  tech: string[]
  github: string
  demo?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 'snap-n-go',
    category: 'iOS Application',
    title: 'Snap N Go',
    description:
      'A real-time iOS application with QR-based team management and live scoreboards. Built with a custom image processing pipeline for ML training data collection.',
    highlights: [
      'QR code-based team joining system',
      'Real-time data sync with Firebase',
      'ML-based image classification pipeline',
      'Custom AVFoundation image capture & preprocessing',
    ],
    tech: ['SwiftUI', 'Firebase', 'ML Kit', 'AVFoundation', 'CoreML'],
    github: 'https://github.com/AustinXu-Dev/SnapNGo.git',
    featured: true,
  },
  {
    id: 'mcg-care',
    category: 'Full-Stack Platform',
    title: 'Smart AC Maintenance System',
    description:
      'Enterprise service platform for managing air conditioning maintenance operations at scale. Automated technician dispatching with client and admin coordination layers.',
    highlights: [
      'Automatic technician assignment algorithm',
      'Multi-role access control (client, admin, technician)',
      'Real-time job scheduling and status updates',
      'Architected for large dataset scalability',
    ],
    tech: ['Laravel', 'PHP', 'iOS', 'REST APIs', 'MySQL'],
    github: 'https://github.com/MCG-Care/MCG-Care-iOS.git',
    featured: true,
  },
  {
    id: 'edgelog',
    category: 'Analytics System',
    title: 'Trading Analytics System',
    description:
      'A personal analytics platform built to improve decision consistency and track behavioral patterns across trading sessions. Data-focused UI designed for systematic review.',
    highlights: [
      'Trade journaling with structured metadata',
      'Consistency scoring and pattern detection',
      'Pair Performance breakdown',
      'Data-driven UI for systematic decision review',
    ],
    tech: ['Next.js', 'TypeScript', 'Serverless', 'Tailwind CSS'],
    github: 'https://github.com/AustinXu-Dev/edgelog',
    featured: true,
  },
  {
    id: 'option-mispricing',
    category: 'ML / Data Pipeline',
    title: 'Option Mispricing Detection',
    description:
      'End-to-end machine learning pipeline that identifies mispriced options contracts. Covers data ingestion from Kaggle through feature engineering to model evaluation.',
    highlights: [
      'Automated data scraping pipeline (Kaggle)',
      'Feature engineering and preprocessing',
      'XGBoost and Random Forest ensemble evaluation',
      'Model performance benchmarking framework',
    ],
    tech: ['Python', 'XGBoost', 'Random Forest', 'Pandas', 'scikit-learn'],
    github: 'https://github.com/AustinXu-Dev/options-mispricing-ml.git',
  },
  {
    id: 'cpu-scheduler',
    category: 'Educational Tool',
    title: 'CPU Scheduling Simulator',
    description:
      'Interactive educational simulator that visualizes classic CPU scheduling algorithms side-by-side. Built as a WWDC project to make OS concepts tangible and comparable.',
    highlights: [
      'FCFS, Round Robin, SJF, and Priority scheduling',
      'Step-by-step algorithm visualization',
      'Real-time Gantt chart rendering',
      'Algorithm performance comparison',
    ],
    tech: ['SwiftUI', 'Algorithms', 'Data Structures'],
    github: 'https://github.com/AustinXu-Dev/cpu-scheduler.git',
    demo: '#',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex flex-col bg-[#0a0a0a] border border-white/[0.06] rounded-xl p-6 hover:border-accent/20 hover:bg-[#0d0d0d] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-accent/10 text-accent border border-accent/15">
            Featured
          </span>
        </div>
      )}

      {/* Category */}
      <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3 font-mono">
        {project.category}
      </p>

      {/* Title */}
      <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-200 mb-3 pr-16">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="flex flex-col gap-1.5 mb-6">
        {project.highlights.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-white/40">
            <span className="text-accent mt-0.5 shrink-0">›</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 rounded text-[11px] font-mono font-medium bg-white/[0.04] border border-white/[0.06] text-white/50 group-hover:text-white/60 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors duration-200"
        >
          <Github className="w-3.5 h-3.5" />
          GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-accent transition-colors duration-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
        )}
        <div className="ml-auto">
          <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-accent/60 transition-colors duration-200" />
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
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
              Work
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Selected Projects
          </h2>
          <p className="text-white/40 text-lg max-w-xl leading-relaxed">
            Real-world systems built for performance, scale, and decision support.
            Not tutorials—production thinking.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {/* First 3 — featured row */}
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Second row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5"
        >
          {projects.slice(3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/austinxu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            More on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
