import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
  <div className="container flex flex-col items-center justify-between gap-4 py-2 md:h-14 md:flex-row md:py-0">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anushka Kumari. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="mailto:anushkalaheri@gmail.com" aria-label="Email">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
          <Link href="https://github.com/AnushkaLaheri" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
          <Link
            href="https://linkedin.com/in/anushka-l-00b7a5249"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
