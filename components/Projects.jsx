'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, FolderGit2, Calendar, Cpu, ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Projects() {
  const { data } = useLanguage()
  const { projects, ui } = data

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
            <FolderGit2 size={14} />
            <span>{ui.projects.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-zinc-100">
            {ui.projects.title} <span className="text-zinc-500">{ui.projects.titleHighlight}</span>
          </h2>
        </div>
        {ui.projects.desc && (
          <p className="text-sm font-mono text-zinc-400 max-w-xs">
            {ui.projects.desc}
          </p>
        )}
      </div>

      {/* Grid of Dynamic Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const stackList = project.techStack || project.tags || []
          return (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950/80 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-zinc-700/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(52,211,153,0.06)]"
            >
              <div>
                {/* Visual Header / Thumbnail Box */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 mb-5 flex items-center justify-center">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const fallback = e.currentTarget.parentElement?.querySelector('.fallback-icon')
                          if (fallback) fallback.style.display = 'flex'
                        }}
                        className="w-full h-full object-cover grayscale opacity-75 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-90"
                      />
                      <div className="fallback-icon absolute inset-0 hidden items-center justify-center opacity-25 group-hover:opacity-40 transition-opacity pointer-events-none">
                        <Cpu size={48} className="text-emerald-400" />
                      </div>
                    </>
                  ) : (
                    /* Fallback Graphic Icon */
                    <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:opacity-40 transition-opacity pointer-events-none">
                      <Cpu size={48} className="text-emerald-400" />
                    </div>
                  )}

                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-zinc-950/90 border border-white/10 font-mono text-[10px] text-emerald-400">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Duration Badge */}
                {project.duration && (
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 mb-2">
                    <Calendar size={12} />
                    <span>{project.duration}</span>
                  </div>
                )}

                {/* Title & Link */}
                <h3 className="text-xl font-medium tracking-tight text-zinc-100 group-hover:text-white transition-colors flex items-start justify-between gap-2">
                  <a
                    href={project.link || '#'}
                    target={project.link && project.link !== '#' ? '_blank' : undefined}
                    rel="noreferrer"
                    className="hover:underline flex-1"
                  >
                    {project.title}
                  </a>
                  <ArrowUpRight
                    size={18}
                    className="text-zinc-500 transition-all group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-1"
                  />
                </h3>

                {/* Description */}
                <p className={`text-sm text-zinc-400 leading-relaxed mt-3 ${project.live || project.github ? 'mb-4' : 'mb-6'}`}>
                  {project.description}
                </p>

                {/* Project Links (Live Demo & Source Code) */}
                {(project.live || project.github) && (
                  <div className="flex items-center gap-4 mb-6 font-mono text-xs">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <ExternalLink size={13} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Tech Stack Tags */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {stackList.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900/90 border border-white/5 text-zinc-400 group-hover:border-white/10 group-hover:text-zinc-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
