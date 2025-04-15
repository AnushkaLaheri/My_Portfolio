"use client"

import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"

export default function ContactSection() {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsSubmitting(true)

    emailjs.sendForm(
      'service_9hmhzm6',         // Replace with your EmailJS Service ID
      'template_nkkgdgi',        // Replace with your Template ID
      formRef.current,
      'rs2fZW6T2l5eyaLIl'        // Replace with your Public Key
    )
    .then(() => {
      setIsSubmitting(false)
      setResponseMessage('Your message has been sent successfully!')
      formRef.current?.reset()
    })
    .catch(() => {
      setIsSubmitting(false)
      setResponseMessage('Something went wrong, please try again.')
    })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Get In Touch</h2>
        <div
          ref={inViewRef}
          className={`grid gap-8 md:grid-cols-2 transition-all duration-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <Card className="border bg-background/60 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <p>Feel free to reach out through any of these channels</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:anushkalaheri@gmail.com" className="text-sm hover:underline">anushkalaheri@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <a
                  href="https://linkedin.com/in/anushka-l-00b7a5249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  linkedin.com/in/anushka-l-00b7a5249
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <a
                  href="https://github.com/AnushkaLaheri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  github.com/AnushkaLaheri
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border bg-background/60 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <p>I'll get back to you as soon as possible</p>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Input name="from_name" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="space-y-2">
                    <Input name="from_email" id="email" type="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Textarea name="message" id="message" placeholder="Your Message" className="min-h-[120px]" required />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
              {responseMessage && (
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  {responseMessage}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
