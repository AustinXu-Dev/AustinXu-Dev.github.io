'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'

const articles = [
  {
    id: 'realtime-ios',
    category: 'iOS Development',
    title: 'Designing Real-Time Systems in iOS Applications',
    description:
      'How to architect Firebase-backed iOS apps that handle live data synchronization, conflict resolution, and offline-first UX patterns without sacrificing performance.',
    readTime: '8 min read',
    date: 'Coming Soon',
    href: '#',
    accent: '#F05138',
  },
  {
    id: 'data-pipeline',
    category: 'Data Engineering',
    title: 'Building a Data Pipeline for Market Analysis',
    description:
      'A practical walkthrough of building an end-to-end pipeline: scraping structured data, engineering features, and surfacing insights through a decision-support interface.',
    readTime: '12 min read',
    date: 'Coming Soon',
    href: '#',
    accent: '#3776AB',
  },
  {
    id: 'system-design',
    category: 'Engineering',
    title: 'From App Development to System Design Thinking',
    description:
      'The mental shift from building features to designing systems: how thinking in flows, constraints, and feedback loops changed the way I approach every project.',
    readTime: '6 min read',
    date: 'Coming Soon',
    href: '#',
    accent: '#00ff9f',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Blog() {
  return (
    <section id="writing" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
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
              Writing
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Thinking Out Loud
          </h2>
          <p className="text-white/40 text-lg max-w-xl leading-relaxed">
            Writing on real-time systems, data pipelines, and the craft of
            building things that actually work in production.
          </p>
        </motion.div>

        {/* Articles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={cardVariants}
              className="group relative flex flex-col bg-[#0a0a0a] border border-white/[0.06] rounded-xl p-6 hover:border-white/10 hover:bg-[#0d0d0d] transition-all duration-300 cursor-pointer"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${article.accent}40, transparent)` }}
              />

              {/* Category + read time */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-medium px-2 py-1 rounded"
                  style={{
                    color: article.accent,
                    backgroundColor: `${article.accent}12`,
                    border: `1px solid ${article.accent}20`,
                  }}
                >
                  {article.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-white/25">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white/90 group-hover:text-white mb-3 leading-snug transition-colors">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/40 leading-relaxed flex-1 mb-6">
                {article.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
                <span className="text-xs text-white/20 font-mono">{article.date}</span>
                <a
                  href={article.href}
                  className="flex items-center gap-1 text-xs text-white/30 group-hover:text-accent transition-colors duration-200"
                >
                  Read more
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
