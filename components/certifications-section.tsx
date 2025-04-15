"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function CertificationsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [showAll, setShowAll] = useState(false)  // State to toggle between "View All" and "View Less"

  const certifications = [
    {
      title: "AI for Entrepreneurship",
      issuer: "Intel",
      image: "cer.jpeg",
      link: "intel-ai-for-enterprenenurship.pdf",
    },
    {
      title: "Python Programming",
      issuer: "Reliance",
      image: "cer.jpeg",
      link: "Python-Programming.pdf",
    },
    {
      title: "Technology Job Simulation",
      issuer: "Deloitte",
      image: "cer.jpeg",
      link: "/Technology-Job-Simulation–Deloitte,Forage.pdf",
    },
    {
      title: "Communication Skills",
      issuer: "NSDC",
      image: "cer.jpeg",
      link: "/Communicationa Skill (Basic).pdf",
    },
    {
      title: "Communication Skills",
      issuer: "NSDC",
         image: "cer.jpeg",
      link: "/Communicationa Skill (Advanced).pdf",
    },
    
    // More certificates can be added here if necessary
  ]

  const displayedCertifications = showAll ? certifications : certifications.slice(0, 4);  // Show the first 2 or all based on showAll

  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Certifications
        </h2>
        <div
          ref={ref}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          {displayedCertifications.map((cert, index) => (
            <Card
              key={index}
              className="flex flex-col border bg-background/60 backdrop-blur-md transition-all hover:shadow-md"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="h-12 w-12 relative overflow-hidden rounded-md">
                  <Image src={cert.image || "/placeholder.svg"} alt={cert.issuer} fill className="object-contain" />
                </div>
                <div>
                  <CardTitle className="text-base">{cert.title}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </div>
              </CardHeader>
              <CardFooter className="pt-2">
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" onClick={() => setShowAll(!showAll)}>
            {showAll ? "View Less" : "View All Certificates"}
          </Button>
        </div>
      </div>
    </section>
  )
}