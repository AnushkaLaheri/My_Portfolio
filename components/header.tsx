"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
<header className="sticky top-0 z-50 w-full border-b bg-[#81BFDA]/90 dark:bg-[#334155]/90 backdrop-blur-md px-3 py-0.25 sm:px-6 sm:py-0.25">
  
  
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">AL</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-foreground/80">
            About
          </Link>
          <Link href="#projects" className="transition-colors hover:text-foreground/80">
            Projects
          </Link>
          <Link href="#experience" className="transition-colors hover:text-foreground/80">
            Experience
          </Link>
          <Link href="#skills" className="transition-colors hover:text-foreground/80">
            Skills
          </Link>
          <Link href="#certifications" className="transition-colors hover:text-foreground/80">
            Certifications
          </Link>
          <Link href="#contact" className="transition-colors hover:text-foreground/80">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button asChild variant="default" className="hidden md:inline-flex">
            <Link href="#contact">Get in Touch</Link>
          </Button>

          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container flex flex-col space-y-3 p-4">
            <Link href="#about" className="py-2" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#projects" className="py-2" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#experience" className="py-2" onClick={toggleMenu}>
              Experience
            </Link>
            <Link href="#skills" className="py-2" onClick={toggleMenu}>
              Skills
            </Link>
            <Link href="#certifications" className="py-2" onClick={toggleMenu}>
              Certifications
            </Link>
            <Link href="#contact" className="py-2" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
