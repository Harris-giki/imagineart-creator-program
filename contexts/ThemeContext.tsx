'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface ThemeCtxType { isDark: boolean; toggle: () => void }
const ThemeCtx = createContext<ThemeCtxType>({ isDark: false, toggle: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        setIsDark(true)
        document.documentElement.classList.add('dark')
      }
    } catch {}
  }, [])

  const toggle = () => {
    setIsDark(prev => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch {}
      return next
    })
  }

  return <ThemeCtx.Provider value={{ isDark, toggle }}>{children}</ThemeCtx.Provider>
}

export const useTheme = () => useContext(ThemeCtx)
