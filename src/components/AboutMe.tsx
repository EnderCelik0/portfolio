import { Github, Globe, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AnimatedText from "./ui/animated-text.js";
import profilePic from "../assets/profileImg.jpg";
import { motion } from "framer-motion";

export default function AboutMe() {
  const aboutMe = {
    profilePic: profilePic,
    name: "Ender ÇELİK",
    job: "Software Engineer",
    description:
      "As a newly graduated Software Engineer, I have a strong passion for web development and animations. I try keep up with the current technologies to create interactive user interfaces.",
    location: "Manisa / Türkiye",
  };

  return (
    <section className="rounded-md border border-primary sm:p-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center sm:justify-between gap-2 sm:flex-row">
          <div className="flex items-center gap-2 pt-6 pb-3 flex-col sm:p-0 sm:flex-row">
            <div>
              <img
                src={aboutMe.profilePic}
                alt="profile picture"
                className="h-14 w-14 rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary">
                {aboutMe.name}
              </h2>
              <p className="text-sm text-muted-foreground">{aboutMe.job}</p>
            </div>
          </div>

          <div className="group flex gap-4 sm:p-0">
            <motion.a
              whileHover={{ y: -5, rotate: 15 }}
              whileTap={{ y: -5, rotate: 15 }}
              href="https://github.com/EnderCelik0"
              className="flex gap-4 text-primary"
              target="_blank"
            >
              <Github size={24} />
            </motion.a>

            <motion.a
              whileHover={{ y: 5, rotate: -15 }}
              whileTap={{ y: -5, rotate: 15 }}
              href="https://www.linkedin.com/in/ender-çelik-9577b023b/"
              className="flex gap-4 text-primary hover:text-primary/80"
              target="_blank"
            >
              <Linkedin size={24} />
            </motion.a>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <motion.div
                    whileHover={{ y: -9, rotate: 15 }}
                    whileTap={{ y: -5, rotate: 15 }}
                    className="h text-primary hover:text-primary/80"
                  >
                    <Globe size={24} />
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Currently in {aboutMe.location}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="flex flex-wrap text-muted-foreground p-4 sm:p-0">
          <AnimatedText text={aboutMe.description} delay={0.01} />
        </div>
      </div>
    </section>
  );
}
