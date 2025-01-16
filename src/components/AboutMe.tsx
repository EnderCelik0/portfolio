import { Github, Globe, Linkedin } from "lucide-react";
import { aboutMe } from "../content/about-me";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AboutMe() {
  return (
    <section className="rounded-md border-2 border-secondary p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
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
              <p className="text-sm italic text-muted-foreground">
                {aboutMe.job}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/EnderCelik0"
              className="flex gap-4 text-primary transition-all duration-200 hover:rotate-12 hover:scale-110 hover:text-primary/80"
              target="_blank"
            >
              <div>
                <Github size={24} />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/ender-%C3%A7elik-9577b023b/"
              className="flex gap-4 text-primary transition-all duration-200 hover:rotate-12 hover:scale-110 hover:text-primary/80"
              target="_blank"
            >
              <div>
                <Linkedin size={24} />
              </div>
            </a>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="h text-primary transition-all duration-200 hover:rotate-12 hover:scale-110 hover:text-primary/80">
                    <Globe size={24} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Currently in Manisa / Türkiye</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div>
          <p className="text-md text-muted-foreground">{aboutMe.description}</p>
        </div>
      </div>
    </section>
  );
}
