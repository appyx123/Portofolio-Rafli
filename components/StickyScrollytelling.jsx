'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Activity, Zap, Radio, Layers, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function StickyScrollytelling() {
  const [activeStep, setActiveStep] = useState(0)
  const { data } = useLanguage()
  const { scrollytellingChapters, ui } = data

  const stageIcons = [
    <Activity key="sensor" size={18} className="text-emerald-400" />,
    <Layers key="dsp" size={18} className="text-teal-300" />,
    <Cpu key="neural" size={18} className="text-emerald-300" />,
    <Radio key="telemetry" size={18} className="text-cyan-400" />,
  ]

  return (
    <section id="scrollytelling" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="mb-16">
        {ui.scrollytelling.kicker && (
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
            <Zap size={14} />
            <span>{ui.scrollytelling.kicker}</span>
          </div>
        )}
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-zinc-100 max-w-3xl">
          {ui.scrollytelling.title} <span className="text-zinc-500 whitespace-nowrap">{ui.scrollytelling.titleHighlight}</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-4 max-w-xl whitespace-pre-line">
          {ui.scrollytelling.desc}
        </p>
      </div>

      {/* Scrollytelling Container */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Scrolling Narrative Text (Mapped from portfolioData) */}
        <div className="lg:col-span-6 space-y-36 py-8">
          {scrollytellingChapters.map((chapter, index) => (
            <motion.div
              key={chapter.step}
              initial={{ opacity: 0.25, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-30% 0px -30% 0px', once: false }}
              onViewportEnter={() => setActiveStep(index)}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                activeStep === index
                  ? 'border-emerald-500/40 bg-zinc-950/90 shadow-[0_0_24px_rgba(52,211,153,0.06)]'
                  : 'border-white/5 bg-zinc-950/30'
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-emerald-400">
                  {ui.scrollytelling.stagePrefix} {chapter.step} / 04
                </span>
              </div>

              <div className="text-xs font-mono text-zinc-400 mb-1">{chapter.phase}</div>
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-100 mb-3">
                {chapter.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {chapter.summary}
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-zinc-400">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span>{chapter.spec}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Sticky Visual Spec Card (position: sticky) */}
        <div className="lg:col-span-6 sticky top-24 self-start">
          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header / Hardware Status */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs text-zinc-200 uppercase tracking-wider">
                  {ui.scrollytelling.nodeHeader}
                </span>
              </div>
              <div className="font-mono text-[11px] text-zinc-500">
                {ui.scrollytelling.stagePrefix} {activeStep + 1} {ui.scrollytelling.stageSuffix}
              </div>
            </div>

            {/* Visual Pipeline Schematic */}
            <div className="space-y-3 mb-8">
              {scrollytellingChapters.map((chap, idx) => {
                const isActive = activeStep === idx
                return (
                  <div
                    key={chap.step}
                    className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 font-mono text-xs ${
                      isActive
                        ? 'bg-zinc-900 border-emerald-500/50 text-zinc-100 shadow-[0_0_15px_rgba(52,211,153,0.1)]'
                        : 'bg-zinc-950/60 border-white/5 text-zinc-500'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-zinc-950 border border-white/10">
                        {stageIcons[idx]}
                      </div>
                      <div>
                        <div className="font-medium">{chap.phase}</div>
                        <div className="text-[10px] text-zinc-400 truncate max-w-[200px] sm:max-w-[260px]">
                          {chap.title}
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-950 border border-white/10 text-zinc-400">
                      {chap.step}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Simulated Real-Time Oscillogram & Telemetry Monitor */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 font-mono">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2">
                <span>{ui.scrollytelling.signalTitle}</span>
                <span className="text-emerald-400 font-semibold">{ui.scrollytelling.statusRealtime}</span>
              </div>

              {/* Animated Waveform SVG */}
              <div className="h-16 w-full flex items-center overflow-hidden py-1">
                <svg
                  viewBox="0 0 500 60"
                  className="w-full h-full stroke-emerald-400/90 fill-none stroke-[1.5]"
                  preserveAspectRatio="none"
                >
                  <path d="M 0,30 L 40,30 L 60,15 L 80,45 L 100,30 L 140,30 L 160,5 L 175,55 L 190,15 L 205,35 L 220,30 L 280,30 L 300,10 L 315,50 L 330,20 L 345,30 L 400,30 L 420,18 L 440,42 L 460,30 L 500,30" />
                </svg>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/5 text-[11px] text-center">
                <div>
                  <div className="text-zinc-500">LATENCY</div>
                  <div className="text-zinc-200 font-semibold">{ui.scrollytelling.statLatency || "< 2 Detik"}</div>
                </div>
                <div>
                  <div className="text-zinc-500">COMPUTE</div>
                  <div className="text-zinc-200 font-semibold">{ui.scrollytelling.statCompute || "ESP32-S3 (TinyML)"}</div>
                </div>
                <div>
                  <div className="text-zinc-500">ACCURACY</div>
                  <div className="text-emerald-400 font-semibold">{ui.scrollytelling.statAccuracy || "> 85.0%"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
