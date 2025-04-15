"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const technicalSkills = [
    "C",
    "Java",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "React.js",
    "Tailwind",
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Data Structures & Algorithms",
    "REST APIs",
    "ML",
    "JWT",
  ]

  const softSkills = ["Problem Solving", "Communication", "Teamwork", "Research & Analysis"]

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Skills</h2>
        <div
          ref={ref}
          className={`grid gap-8 md:grid-cols-2 transition-all duration-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <Card className="border bg-background/60 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">💻</span> Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border bg-background/60 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">🎯</span> Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
