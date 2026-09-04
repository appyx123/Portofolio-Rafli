'use client'

import { motion } from 'framer-motion'
import { Award, Terminal, Check, Calendar } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function SkillsAndCerts() {
  const { language, data } = useLanguage()
  const { skills, certifications, ui } = data

  const categoryLabels = {
    en: {
      ai_ml: 'Artificial Intelligence & Machine Learning',
      software_dev: 'Software Engineering & Web',
      hardware_iot: 'Hardware, Embedded & TinyML',
      infrastructure: 'Infrastructure & Automation',
      research_soft_skills: 'Research, Leadership & Management',
    },
    id: {
      ai_ml: 'Kecerdasan Buatan & Machine Learning',
      software_dev: 'Rekayasa Perangkat Lunak & Web',
      hardware_iot: 'Perangkat Keras, Embedded & TinyML',
      infrastructure: 'Infrastruktur & Otomasi Sistem',
      research_soft_skills: 'Riset, Kepemimpinan & Manajemen',
    }
  }

  const currentLabels = categoryLabels[language] || categoryLabels.en

  // Handle both object format and array format for skills
  const skillsEntries = Array.isArray(skills)
    ? skills.map((s) => ({ category: s.category, items: s.items }))
    : Object.entries(skills || {}).map(([key, items]) => ({
        category: currentLabels[key] || key.replace(/_/g, ' ').toUpperCase(),
        items,
      }))

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Skills Section */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
            <Terminal size={14} />
            <span>{ui.skills.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-100 mb-8">
            {ui.skills.title} <br />
            <span className="text-zinc-500">{ui.skills.titleHighlight}</span>
          </h2>

          <div className="space-y-5">
            {skillsEntries.map((group, gIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: gIdx * 0.08 }}
                className="p-5 rounded-xl border border-white/5 bg-zinc-950/60"
              >
                <div className="text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-900 border border-white/10 text-zinc-200 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
            <Award size={14} />
            <span>{ui.skills.certsKicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-100 mb-8">
            {ui.skills.certsTitle}
          </h2>

          <div className="space-y-4">
            {certifications.map((cert, cIdx) => (
              <motion.div
                key={cert.id || cIdx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: cIdx * 0.08 }}
                className="p-5 rounded-xl border border-white/10 bg-zinc-950/80 hover:border-zinc-700/80 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-zinc-100 leading-snug">
                      {cert.name || cert.title}
                    </h3>
                    <div className="text-xs font-mono text-emerald-400 mt-1.5 flex items-center gap-2">
                      <span>{cert.issuer}</span>
                      <span className="text-zinc-600">·</span>
                      <span className="text-zinc-500 flex items-center gap-1">
                        <Calendar size={11} />
                        {cert.date || cert.year}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
