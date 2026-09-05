'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Terminal, Cpu } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { data } = useLanguage()
  const { personalInfo, ui } = data

  return (
    <section
      id="top"
      className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-20 px-6 max-w-6xl mx-auto"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Main Title & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-zinc-100 leading-[0.95]">
              Muhammad <br />
              <span className="text-zinc-500">Rafli.</span>
            </h1>

            <div className="pt-2 flex items-center gap-2.5 text-sm sm:text-base font-mono text-emerald-400/90">
              <Cpu size={16} className="text-emerald-400 shrink-0" />
              <span>{personalInfo.headline}</span>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl pt-2">
              {personalInfo.summary}
            </p>
          </motion.div>

          {/* CTAs & Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-8"
          >
            <a
              href="#scrollytelling"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-xs tracking-tight hover:bg-white transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              style={{ color: '#09090b' }}
            >
              <span className="text-zinc-950" style={{ color: '#09090b' }}>
                {ui.hero.explore}
              </span>
              <ArrowDown size={14} className="text-zinc-950" style={{ color: '#09090b' }} />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-200 text-xs font-mono hover:border-zinc-700 hover:text-white transition-all"
            >
              <span>{ui.hero.viewProjects}</span>
              <ArrowUpRight size={14} className="text-zinc-400" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-zinc-400 hover:text-emerald-400 text-xs font-mono transition-colors"
            >
              <Terminal size={14} />
              <span>{personalInfo.email}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Clean Frameless Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[380px]">
            <img
              src="/images/profile.jpg"
              alt={personalInfo.name}
              className="w-full h-auto object-contain select-none grayscale contrast-[1.08] brightness-[0.98] [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
