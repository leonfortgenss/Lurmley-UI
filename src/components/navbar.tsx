"use client"

import Link from "next/link"
import { Github, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KbmInput } from "@/components/ui/kbm-input"
import { useTheme } from "next-themes"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="w-full flex items-center justify-between h-[8vh] px-[12rem] border-b border-muted">
      <div className="flex items-center gap-4">
        <h2 className="font-semibold mr-4">Lurmley/UI</h2>
        <Link href="#" className="hover:underline text-sm">Docs</Link>
        <Link href="#" className="hover:underline text-sm">Components</Link>
        <Link href="#" className="hover:underline text-sm">Blocks</Link>
        <Link href="#" className="hover:underline text-sm">Charts</Link>
        <Link href="#" className="hover:underline text-sm">Themes</Link>
        <Link href="#" className="hover:underline text-sm">Colors</Link>
      </div>
      <div className="flex items-center gap-4">
        <KbmInput className="" />
        <Github className="w-5 h-5" />
        <Button 
          variant="ghost"
          size="icon"
          className="p-2"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "light" ? <Moon /> : <Sun />}
        </Button>
      </div>
    </nav>
  )
}