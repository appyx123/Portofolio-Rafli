'use client'

import { LanguageProvider } from '../context/LanguageContext'
import ScrollProgress from '../components/ScrollProgress'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StickyScrollytelling from '../components/StickyScrollytelling'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import SkillsAndCerts from '../components/SkillsAndCerts'
import ContactAndFooter from '../components/ContactAndFooter'

export default function Page() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-black text-zinc-100 selection:bg-emerald-400 selection:text-black">
        {/* 2px Horizontal Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Vercel/Linear Minimalist Navigation Bar with Language Switcher */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Selected Experience Section (Data-Driven) */}
        <Experience />

        {/* Sticky Scrollytelling Section (position: sticky architecture demo) */}
        <StickyScrollytelling />

        {/* Selected Projects Grid (Data-Driven) */}
        <Projects />

        {/* Skills & Certifications Section (Data-Driven) */}
        <SkillsAndCerts />

        {/* Contact & Footer Section */}
        <ContactAndFooter />
      </main>
    </LanguageProvider>
  )
}
