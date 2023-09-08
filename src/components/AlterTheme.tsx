'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './Button'

export function AlterTheme() {
  const { theme, setTheme } = useTheme()

  function handleAlterTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <Button variant="ghost" onClick={() => handleAlterTheme()}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
}
