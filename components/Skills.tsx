'use client'

import { motion } from 'framer-motion'
import { Smartphone, Server, Globe, BrainCircuit, Wrench } from 'lucide-react'

interface SkillGroup {
  icon: React.ElementType
  category: string
  description: string
  skills: string[]
  accent: string
}

const skillGroups: SkillGroup[] = [
  {
    icon: Smartphone,
    category: 'iOS Development',
    description: 'Native iOS apps with real-time data, camera, and ML integration.',
    skills: ['SwiftUI', 'UIKit', 'AVFoundation', 'MapKit', 'CoreML', 'CoreData'],
    accent: '#F05138',
  },
  {
    icon: Server,
    category: 'Backend & APIs',
    description: 'RESTful services, business logic, and enterprise platform architecture.',
    skills: ['Laravel', 'PHP', 'REST APIs', 'MySQL', 'Oracle DB', 'Authentication'],
    accent: '#FF2D20',
  },
  {
    icon: Globe,
    category: 'Frontend',
    description: 'Modern web interfaces with clean UX and component-driven architecture.',
    skills: ['Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Blade', 'React'],
    accent: '#61dafb',
  },
  {
    icon: BrainCircuit,
    category: 'Data & AI',
    description: 'ML pipelines, data preprocessing, and local LLM tooling.',
    skills: ['Python', 'XGBoost', 'Random Forest', 'Pandas', 'scikit-learn', 'Ollama', 'Streamlit'],
    accent: '#3776AB',
  },
  {
    icon: Wrench,
    category: 'Tools & Systems',
    description: 'Infrastructure, version control, real-time architecture, and system design.',
    skills: ['Git', 'Firebase', 'AWS', 'System Design', 'Real-time Architecture', 'REST', 'Serverless'],
    accent: '#FF9900',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
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
              Expertise
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Skills & Tools
          </h2>
          <p className="text-white/40 text-lg max-w-xl leading-relaxed">
            A cross-stack developer with depth in iOS, backend systems, and data engineering.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                className="p-6 bg-[#0a0a0a] border border-white/[0.06] rounded-xl hover:border-white/10 transition-all duration-300 group"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${group.accent}12`,
                      border: `1px solid ${group.accent}25`,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: group.accent }} />
                  </div>
                  <h3 className="text-sm font-bold text-white/90">{group.category}</h3>
                </div>

                {/* Description */}
                <p className="text-xs text-white/35 leading-relaxed mb-4">
                  {group.description}
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.04] border border-white/[0.07] text-white/55 hover:text-white/80 hover:border-white/12 transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}

          {/* Misc tag cloud card */}
          <motion.div
            variants={cardVariants}
            className="p-6 bg-[#0a0a0a] border border-white/[0.06] rounded-xl hover:border-white/10 transition-all duration-300 md:col-span-2 lg:col-span-1"
          >
            <p className="text-xs font-mono text-white/25 uppercase tracking-widest mb-4">
              Also familiar with
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'Xcode', 'Figma', 'Postman', 'DBeaver', 'VS Code',
                'GitHub Actions', 'Nginx', 'Linux', 'Jupyter',
                'Kaggle', 'Docker', 'Vercel',
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.02] border border-white/[0.05] text-white/30 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
