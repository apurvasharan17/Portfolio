"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";



export default function Projects() {
  const projects = [
    {
      title: "MeetMingle",
      description:
        "A real-time video and audio conferencing solution using WebRTC, enabling high-quality communication with features such as mute/unmute control, seamless call termination, screen sharing for enhanced collaboration, and integrated chat for text-based interaction.",
      image: "/MeetMingle.png",
      tags: ["WebRTC", "React.js", "Node.js", "Real-time Communication"],
      github: "https://github.com/apurvasharan17/MeetMingle",
      demo: "https://meetmingle.vercel.app/",
    },
    {
      title: "FootFury",
      description:
        "An end-to-end e-commerce app for shoe shopping with a responsive design, featuring user authentication and CRUD operations for cart, wishlist, and address management. Includes a comprehensive mock backend using Mockman, providing various API endpoints and database configurations to ensure smooth front-end development.",
      image: "/FootFury.png",
      tags: ["React.js", "React Router V6", "HTML", "CSS", "Mockbee"],
      github: "https://github.com/apurvasharan17/FootFury",
      demo: "https://footfury.vercel.app/",
    },
    {
      title: "ApuTV",
      description:
        "A full-stack video streaming platform using React, Node.js, and WebRTC, featuring user authentication, dynamic video listing, genre-based filtering, liked videos, watch later, and history tracking. Created an intuitive UI/UX with dynamic content rendering, seamless navigation, and a responsive design optimized for various devices.",
      image: "/ApuTV.png",
      tags: ["React.js", "Node.js", "WebRTC", "Video Streaming"],
      github: "https://github.com/apurvasharan17/ApuTV",
      demo: "https://aputv.vercel.app/",
    },
  ]

  return (
<section id="projects" className="py-20 bg-muted/30">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <CardContainer className="inter-var" key={index}>
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-[520px] w-full rounded-xl p-4 border flex flex-col justify-between">
            <div>
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                {project.title}
              </CardItem>
              <CardItem translateZ="60" as="p" className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.image}
                  height={1000}
                  width={1000}
                  className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </div>

            <div className="flex justify-between items-center mt-6">
              <CardItem
                translateZ={20}
                as={Link}
                href={project.demo}
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href={project.github}
                target="_blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                GitHub
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  </div>
</section>

  )
}

