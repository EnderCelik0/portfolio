import { motion } from "framer-motion";
import HeadingChip from "./ui/heading-chip";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  SiShadcnui,
  SiTailwindcss,
  SiReactquery,
  SiCss3,
  SiReactrouter,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { useTheme } from "../context/theme-provider";
import AnimatedText from "./ui/animated-text";

export default function Techs() {
  const { theme } = useTheme();

  console.log(theme);

  const Tech = [
    {
      name: "shadcn/ui",
      // descriptions: (
      //   <AnimatedText
      //     text="1111111111111111111111111111111111111"
      //     delay={0.01}
      //   />
      // ),
      href: "https://ui.shadcn.com/",
      icon: <SiShadcnui className="h-8 w-8 text-primary" />,
    },
    {
      name: "React",
      // descriptions: (
      //   <AnimatedText
      //     text="1111111111111111111111111111111111111"
      //     delay={0.01}
      //   />
      // ),
      icon: <FaReact className="h-8 w-8 text-primary" />,
      href: "https://react.dev/",
    },
    {
      name: "React Query",
      // descriptions: (
      //   <AnimatedText
      //     text="1111111111111111111111111111111111111"
      //     delay={0.01}
      //   />
      // ),
      icon: <SiReactquery className="h-8 w-8 text-primary" />,
      href: "https://tanstack.com/query/latest",
    },
    {
      name: "React Router",
      // descriptions: (
      //   <AnimatedText
      //     text="1111111111111111111111111111111111111"
      //     delay={0.01}
      //   />
      // ),
      icon: <SiReactrouter className="h-8 w-8 text-primary" />,
      href: "https://reactrouter.com/",
    },
    {
      name: "Tailwind CSS",
      // descriptions: (
      //   <AnimatedText
      //     text="1111111111111111111111111111111111111"
      //     delay={0.01}
      //   />
      // ),
      icon: <SiTailwindcss className="h-8 w-8 text-primary" />,
      href: "https://tailwindcss.com/",
    },
    {
      name: "CSS",
      // descriptions: (
      //   <AnimatedText
      //     text="1111111111111111111111111111111111111"
      //     delay={0.01}
      //   />
      // ),
      icon: <SiCss3 className="h-8 w-8 text-primary" />,
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "Motion",
      // descriptions: (
      //   <AnimatedText
      //     text="1111111111111111111111111111111111111"
      //     delay={0.01}
      //   />
      // ),
      icon: <TbBrandFramerMotion className="h-8 w-8 text-primary" />,
      href: "https://motion.dev/docs/react-quick-start",
    },
  ];

  return (
    <div className="flex h-[30dvh] flex-col justify-center gap-6">
      <HeadingChip textColor="text-primary" bgColor="bg-primary/10">
        Technologies & Tools
      </HeadingChip>
      <div className="rounded-lg border-2 border-primary/70 px-8 py-12">
        <div className="flex items-center justify-evenly">
          <TooltipProvider delayDuration={0}>
            {Tech.map((tech, index) => (
              <Tooltip key={tech.name}>
                <TooltipTrigger>
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    href={tech.href}
                    key={tech.name}
                    target="_blank"
                  >
                    {tech.icon}
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="flex flex-col items-center">
                    <p className="text-md font-semibold text-primary-foreground">
                      {tech.name}
                    </p>
                    {/* <p className="text-sm text-popover">{tech.descriptions}</p> */}
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
