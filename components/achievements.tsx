"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      title: "Top Scorer in University",
      description: "Achieved Highest CGPA in the batch.",
      icon: <Trophy className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Achievements</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-shrink-0 p-4 bg-primary/10 rounded-full">{achievement.icon}</div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <p className="text-foreground/70 mt-1">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

