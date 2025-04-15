"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      title: "Food For All",
      description: "AI-based food donation app with dark mode, gamified UI, confetti, sound effects, and leaderboard.",
      tech: ["React", "Tailwind", "Firebase"],
      github: "https://github.com/Garimaraj15/food-for-all",
      demo: "https://foodforall-d1uekqcqe-anushkalaheri-gmailcoms-projects.vercel.app",
    },
    {
      title: "AI in Agriculture",
      description: "Crop disease prediction using ML with 90%+ accuracy, integrated with a React dashboard.",
      tech: ["Python", "Flask", "React"],
      github: "https://github.com/AnushkaLaheri/AI-Agri-Innovators",
      demo: "#",
    },
    {
      title: "Personal Financial Assistant",
      description: "Budget tracker with secure login, data visualizations, and live expense analytics.",
      tech: ["React", "Node.js", "MongoDB", "Firebase Auth"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Projects</h2>
        <div
          ref={ref}
          className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden border bg-background/60 backdrop-blur-md transition-all hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
