"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadError, setDownloadError] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleResumeDownload = async () => {
    setIsDownloading(true)
    setDownloadError(null)

    try {
      console.log("Download initiated");

      const logResponse = await fetch("/api/log-download", {
        method: "POST",
      });

      if (!logResponse.ok) {
        throw new Error("Failed to log download");
      }

      const link = document.createElement('a');
      link.href = "/Anushka_Kumari_Resume.pdf"; // Ensure this path is correct
      link.download = "Anushka_Kumari_Resume.pdf"; // Specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log("Download successful");
    } catch (error) {
      console.error("Error during download:", error);
      setDownloadError("Failed to download the resume. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 md:py-24 lg:py-32 relative overflow-hidden bg-background/50 transition-all duration-500">
      <div className={`space-y-6 text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Anushka Kumari</h1>
            <p className="text-xl text-muted-foreground">B.Tech CSBS Student | Full-Stack Developer | ML Enthusiast</p>
          </div>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Turning ideas into real-world solutions with clean code and creative thinking.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button asChild size="lg">
              <Link href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={handleResumeDownload} disabled={isDownloading}>
              {isDownloading ? "Downloading..." : "Download Resume"}
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
          {downloadError && <p className="text-red-500">{downloadError}</p>}
        </div>
      </section>
    </div>
  )
}