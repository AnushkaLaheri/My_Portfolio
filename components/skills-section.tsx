"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const technicalSkills = {
    "Programming Languages": ["C", "Java", "Python", "JavaScript"],
    "Web Development": [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "HTML",
      "CSS",
      "Tailwind",
      "Bootstrap",
    ],
    "Tools & Concepts": ["Git", "GitHub", "DSA", "REST APIs", "JWT", "ML", "Firebase"],
  }

  const softSkillGroups = {
    "Professional Skills 💼": ["Communication", "Teamwork", "Leadership", "Adaptability"],
    "Cognitive Skills 🧠": ["Problem Solving", "Critical Thinking", "Creativity", "Attention to Detail"],
    "Productivity Skills ⚙️": ["Time Management", "Collaboration", "Decision Making", "Research & Analysis"],
  }

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-4xl font-extrabold tracking-tight text-center sm:text-5xl">
          Skills
        </h2>
        <div
          ref={ref}
          className={`grid gap-8 md:grid-cols-2 transition-all duration-700 ease-out ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Technical Skills Card */}
          <Card className="border bg-background/60 backdrop-blur-md shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-primary">💻</span> Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              {Object.entries(technicalSkills).map(([category, skills], index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs px-2 py-0.5 hover:scale-105 transition-transform"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills Card */}
          <Card className="border bg-background/60 backdrop-blur-md shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-primary">🎯</span> Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              {Object.entries(softSkillGroups).map(([group, skills], index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                    {group}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs px-2 py-0.5 hover:scale-105 transition-transform"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
