"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "Presidency University, Bangalore",
      degree: "Bachelor of Computer Applications",
      period: "2022-2025",
      score: "CGPA - 9.69",
    },
    {
      institution: "Holy Mission Senior Secondary School, Patna",
      degree: "12th Grade",
      
      score: "96.4%",
    },
    {
      institution: "Ishan International Public School, Patna",
      degree: "10th Grade",
      
      score: "95%",
    },
  ]

  const certifications = [
    {
      title: "React Certificate",
      issuer: "HackerRank",
      link:"https://www.hackerrank.com/certificates/64ca5e1c9064"
    },
    {
      title: "SQL and Relational Db Certificate",
      issuer: "IBM",
      link: "https://drive.google.com/file/d/1xPC3WN1LU1YeiG5aEWN-SBeEpnx40CiN/view",
    },
    {
      title: "DSA (in Java)",
      issuer: "Apna College",
      link: "https://drive.google.com/file/d/1ljRKAERdEVeOGB03s2A_mQSCNTF61FIn/view",
    },
    {
      title: "Full Stack Web Development Certificate",
      issuer: "Apna College",
      link: "https://drive.google.com/file/d/1yjQ4Edutqf9FjCEsn9TqD3x4WXfl4pd2/view",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Education & Certifications</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-border">
              {education.map((item, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                  </div>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold">{item.institution}</h4>
                      <p className="text-foreground/70">{item.degree}</p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-foreground/60">
                       {item.period && <Calendar className="h-4 w-4" />}
                        <span>{item.period}</span>
                      </div>
                      <p className="mt-2 text-primary font-medium">{item.score}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Certifications
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold">{cert.title}</h4>
                    {cert.issuer && <p className="text-foreground/70">{cert.issuer}</p>}
                    {cert.link && (
                      <a
                        href={cert.link}
                        className="text-primary hover:underline text-sm mt-1 inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

