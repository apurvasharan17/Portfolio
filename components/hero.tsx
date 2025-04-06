"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Spotlight } from "./ui/spotlight";


export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 "
        fill="white"
      />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6"
          >

    
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-primary">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold">Apurva Sharan</h1>
              <p className="text-xl md:text-2xl text-foreground/80 mt-2">Full Stack Developer</p>
            </div>

            <p className="text-lg text-foreground/70 max-w-xl">
              I'm passionate about building responsive web applications with modern technologies. Specializing in
              React.js, Node.js, and full-stack development.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild size="lg">
                <Link href="https://drive.google.com/file/d/1s9t6c0IPhTZrpSJ0kI-3GFlU4R6-7_56/view?usp=sharing">View Resume</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com/apurvasharan17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/apurva-sharan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:ranjan.apurva2017@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="/profile.png"
                alt="Apurva Sharan"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <Link
            href="#about"
            className="flex flex-col items-center text-foreground/70 hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

