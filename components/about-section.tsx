"use client"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" className="py-16 md:py-24" ref={ref}>
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">About Me</h2>
        <div
          className={`grid gap-12 md:grid-cols-2 items-center transition-all duration-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} md:grid-cols-[1fr_2fr]
`}
        >
          <div className="flex justify-center md:justify-end">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 md:h-80 md:w-80">
            <Image
    src="/photo.jpg"
    alt="Anushka Kumari"
    fill
    sizes="(max-width: 768px) 256px, 320px"
    className="object-cover rounded-3xl"
    priority
  />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              I'm a Computer Science and Business Systems student at Heritage Institute of Technology (2023–2027),
              passionate about building clean, scalable software with real-world impact. I specialize in full-stack
              development and AI/ML research, and love participating in hackathons and collaborative innovation.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Full-Stack Development
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Machine Learning
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Problem Solving
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Hackathons
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
