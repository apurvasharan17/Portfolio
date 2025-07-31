"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                I'm Apurva Sharan, a passionate Full Stack Developer currently pursuing my Bachelor's in Computer
                Applications at Presidency University, Bangalore with a CGPA of 9.69.
              </p>
              <p>
                I specialize in building responsive and user-friendly web applications using modern technologies like React Native,
                React.js, Node.js, and Express.js. My experience includes developing real-time communication solutions,
                e-commerce platforms, and video streaming services.
              </p>
              <p>
                I'm dedicated to writing clean, efficient code and constantly expanding my knowledge in the
                ever-evolving field of web development. I enjoy solving complex problems and creating intuitive user
                experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Personal Info</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-foreground/70">Location</p>
                    <p>Bangalore, India</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-foreground/70">Email</p>
                    <p>ranjan.apurva2017@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-foreground/70">Phone</p>
                    <p>+91-6204873707</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

