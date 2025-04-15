// app/layout.tsx

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anushka Kumari | Full-Stack Developer",
  description:
    "Anushka Kumari is a B.Tech CSBS Student, Full-Stack Developer, and ML Enthusiast passionate about turning ideas into real-world solutions.",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`h-full ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col 
  bg-gradient-to-br 
  from-[#A8E9DC] via-[#A1E3F9] via-[#578FCA] to- [#3674B5]
  dark:from-[#334155]  dark:to-[#0f172a]
  transition-all duration-500"
>
 

            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
