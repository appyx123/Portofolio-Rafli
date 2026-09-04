'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { portfolioData } from '../src/data/portfolioData.js'

const LanguageContext = createContext({
  language: 'id',
  setLanguage: () => {},
  toggleLanguage: () => {},
  data: portfolioData.id,
})

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('id') // Default to Indonesian or English
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('portfolio_lang')
    if (saved === 'en' || saved === 'id') {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang) => {
    setLanguage(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_lang', lang)
    }
  }

  const toggleLanguage = () => {
    const next = language === 'en' ? 'id' : 'en'
    handleSetLanguage(next)
  }

  const currentData = portfolioData[language] || portfolioData.en

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        toggleLanguage,
        data: currentData,
        mounted,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    return {
      language: 'id',
      setLanguage: () => {},
      toggleLanguage: () => {},
      data: portfolioData.id,
      mounted: false,
    }
  }
  return context
}
