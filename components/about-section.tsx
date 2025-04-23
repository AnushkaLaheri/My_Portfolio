"use client"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react" // Import useEffect

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const [isModalOpen, setIsModalOpen] = useState(false) // State for modal

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  }, [isModalOpen]);

  const handleImageClick = () => {
    setIsModalOpen(true) // Open modal on image click
  }

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false) // Close modal when clicking outside the image
    }
  }

  return (
    <section id="about" className="py-16 md:py-24" ref={ref}>
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">About Me</h2>
        <div
          className={`grid gap-12 md:grid-cols-2 items-center transition-all duration-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} md:grid-cols-[1fr_2fr]`}
        >
          <div className="flex justify-center md:justify-end">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-primary/20 md:h-64 md:w-64" onClick={handleImageClick}>
              <Image
                src="/photo.jpg"
                alt="Anushka Kumari"
                fill
                sizes="(max-width: 768px) 192px, 256px" // Adjusted sizes for smaller circle
                className="object-cover rounded-full brightness-110" // Ensure circular shape
                priority
              />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
            I'm a motivated and curious undergraduate student with a strong foundation in programming, full-stack development, and analytical thinking. I actively participate in hackathons, open-source contributions, and technical communities. I'm looking for internship opportunities where I can learn, collaborate, and contribute meaningfully to exciting real-world projects.
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
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm" onClick={handleCloseModal}>
            <div className="relative w-96 h-96 overflow-hidden rounded-full border-4 border-primary/20 shadow-2xl"> {/* Add border and shadow */}
              <Image
                src="/photo.jpg"
                alt="Anushka Kumari"
                layout="fill" // Use layout fill to cover the container
                className="object-cover rounded-full brightness-125" // Increase brightness
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
