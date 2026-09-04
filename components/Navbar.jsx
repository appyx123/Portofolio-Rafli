'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage, data } = useLanguage()

  const navItems = [
    { label: data.ui.nav.about, href: '#about' },
    { label: data.ui.nav.experience, href: '#experience' },
    { label: data.ui.nav.scrollytelling, href: '#scrollytelling' },
    { label: data.ui.nav.projects, href: '#projects' },
    { label: data.ui.nav.skills, href: '#skills' },
    { label: data.ui.nav.contact, href: '#contact' },
  ]

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-40 w-[min(880px,calc(100%-2rem))]">
      <nav className="flex items-center justify-between px-4 py-2.5 rounded-full bg-zinc-950/85 backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all">
        {/* Monogram Brand */}
        <a
          href="#top"
          className="flex items-center gap-1.5 font-bold tracking-tight text-zinc-100 hover:text-white text-sm pl-2"
        >
          <span>MR</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5 text-xs font-mono text-zinc-400">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Section: Language Switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Minimalist Language Switcher Pill */}
          <div className="flex items-center p-0.5 rounded-full bg-zinc-900 border border-white/10 text-[11px] font-mono">
            <button
              onClick={() => setLanguage('id')}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === 'id'
                  ? 'bg-emerald-400 text-zinc-950 font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              style={language === 'id' ? { color: '#09090b' } : undefined}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === 'en'
                  ? 'bg-emerald-400 text-zinc-950 font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              style={language === 'en' ? { color: '#09090b' } : undefined}
            >
              EN
            </button>
          </div>

          <a
            href={`mailto:${data.personalInfo.email}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-300 bg-emerald-950/50 border border-emerald-500/20 hover:border-emerald-400/40 transition-all hover:shadow-[0_0_12px_rgba(52,211,153,0.15)]"
          >
            <span>{data.ui.nav.talk}</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Section: Lang + Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <div className="flex items-center p-0.5 rounded-full bg-zinc-900 border border-white/10 text-[11px] font-mono">
            <button
              onClick={() => setLanguage('id')}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === 'id'
                  ? 'bg-emerald-400 text-zinc-950 font-semibold'
                  : 'text-zinc-400'
              }`}
              style={language === 'id' ? { color: '#09090b' } : undefined}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === 'en'
                  ? 'bg-emerald-400 text-zinc-950 font-semibold'
                  : 'text-zinc-400'
              }`}
              style={language === 'en' ? { color: '#09090b' } : undefined}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="p-1.5 text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="md:hidden mt-2 p-3 rounded-2xl bg-zinc-950/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-1 text-sm font-mono"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${data.personalInfo.email}`}
              onClick={() => setOpen(false)}
              className="mt-2 text-center py-2.5 px-4 rounded-xl bg-emerald-400 text-zinc-950 font-sans font-semibold text-xs transition-colors hover:bg-emerald-300"
              style={{ color: '#09090b' }}
            >
              {data.ui.nav.talk} ({data.personalInfo.email})
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
