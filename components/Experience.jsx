'use client'

import { motion } from 'framer-motion'
import { Briefcase, ArrowUpRight, CheckCircle2, GraduationCap, Calendar } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Experience() {
  const { data } = useLanguage()
  const { experience, education, ui } = data

  const getTypeBadgeColor = (type) => {
    switch (type) {
      case 'Professional':
      case 'Profesional':
        return 'border-emerald-500/30 text-emerald-400 bg-emerald-950/40'
      case 'Research':
      case 'Riset':
        return 'border-cyan-500/30 text-cyan-400 bg-cyan-950/40'
      case 'Leadership':
      case 'Kepemimpinan':
        return 'border-amber-500/30 text-amber-400 bg-amber-950/40'
      case 'Academic':
      case 'Akademik':
      default:
        return 'border-zinc-500/30 text-zinc-300 bg-zinc-900/60'
    }
  }

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/10">
      {/* Education Highlight Card */}
      {education && education.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 p-6 sm:p-8 rounded-2xl border border-white/10 bg-zinc-950/80 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
            <GraduationCap size={15} />
            <span>{ui.experience.academicKicker}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-100">
                {education[0].degree}
              </h3>
              <p className="text-sm font-mono text-emerald-400 mt-1">
                {education[0].institution}
              </p>
              <p className="text-xs text-zinc-400 mt-2">
                {education[0].description}
              </p>
            </div>

            <div className="sm:text-right shrink-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold">
                GPA {education[0].gpa}
              </div>
              <div className="text-xs font-mono text-zinc-500 mt-2 flex items-center sm:justify-end gap-1.5">
                <Calendar size={12} />
                <span>{education[0].duration}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
          <Briefcase size={14} />
          <span>{ui.experience.workKicker}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-zinc-100">
          {ui.experience.title} <span className="text-zinc-500">{ui.experience.titleHighlight}</span>
        </h2>
        <p className="text-sm font-mono text-zinc-400 mt-2">
          {ui.experience.subtitle}
        </p>
      </div>

      {/* Timeline List */}
      <div className="space-y-6">
        {experience.map((item, index) => (
          <motion.div
            key={item.id || index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative rounded-2xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700/80 hover:bg-zinc-950 hover:shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(52,211,153,0.05)]"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-sm font-mono text-emerald-400">
                    @ {item.company}
                  </span>
                </div>
                <div className="text-xs font-mono text-zinc-500 mt-1">
                  {item.duration || item.period}
                </div>
              </div>

              <div className="flex items-center gap-3">
                {item.type && (
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${getTypeBadgeColor(
                      item.type
                    )}`}
                  >
                    {item.type}
                  </span>
                )}
                <div className="hidden sm:block">
                  <ArrowUpRight
                    size={18}
                    className="text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
              </div>
            </div>

            {item.description && (
              <p className="text-sm text-zinc-300 leading-relaxed mb-4 max-w-3xl">
                {item.description}
              </p>
            )}

            {/* Highlights */}
            {item.highlights && item.highlights.length > 0 && (
              <ul className="space-y-2 mt-3 text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                {item.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Optional Tech Stack Chips (if available) */}
            {item.stack && item.stack.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-white/5">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-900/80 border border-white/5 text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
