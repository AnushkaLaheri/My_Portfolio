"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperienceSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Experience</h2>
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <div className="relative border-l border-muted-foreground/20 pl-6 md:pl-8">
            <div className="mb-10 last:mb-0">
              
              <Card className="border bg-background/60 backdrop-blur-md">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle>Agnirva Space Internship</CardTitle>
                    <CardDescription className="text-sm md:text-right">Nov 2024 – Dec 2024</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Self-paced internship (80+ hours)</li>
                    <li>Astronomy, cosmology, and space policy</li>
                    <li>Collaborated with a global space-enthusiast community</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
