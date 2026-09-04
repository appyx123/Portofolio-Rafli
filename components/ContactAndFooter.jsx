'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Copy, Check, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function ContactAndFooter() {
  const [copied, setCopied] = useState(false)
  const { data } = useLanguage()
  const { personalInfo, ui } = data

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer id="contact" className="border-t border-white/10 bg-black pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-zinc-950/80 p-8 sm:p-14 relative overflow-hidden mb-20"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400 mb-6">
              <span>{ui.contact.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-zinc-100 mb-4">
              {ui.contact.title} <br />
              <span className="text-zinc-500">{ui.contact.titleHighlight}</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
              {ui.contact.desc}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-400 text-zinc-950 font-semibold text-xs tracking-tight hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(52,211,153,0.2)]"
                style={{ color: '#09090b' }}
              >
                <Mail size={14} className="text-zinc-950" style={{ color: '#09090b' }} />
                <span className="text-zinc-950" style={{ color: '#09090b' }}>
                  {ui.contact.sendEmail}
                </span>
                <ArrowUpRight size={14} className="text-zinc-950" style={{ color: '#09090b' }} />
              </a>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-mono hover:border-zinc-700 hover:text-white transition-all"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span>{ui.contact.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>{ui.contact.copyAddress}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Sub-Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name} · {ui.contact.footerNote}
          </div>

          <div className="flex items-center gap-4">
            <div className="text-zinc-500 mr-2">
              {personalInfo.phone}
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors p-1"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors p-1"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
