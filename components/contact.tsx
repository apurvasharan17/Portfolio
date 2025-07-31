"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { sendEmail, type ContactFormData } from "@/app/actions/send-email"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setIsSubmitting(true)

      // Call the server action to send the email
      const result = await sendEmail(formData)

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "default",
        })

        // Reset the form on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        toast({
          title: "Error sending message",
          description: result.error || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message could not be sent. Please try again later.",
        variant: "destructive",
      })
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "ranjan.apurva2017@gmail.com",
      link: "mailto:ranjan.apurva2017@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91-6204873707",
      link: "tel:+916204873707",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Bangalore, India",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-foreground/70 hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground/70">{info.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

