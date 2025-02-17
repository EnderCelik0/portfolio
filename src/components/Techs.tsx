import { motion } from "framer-motion";
import {
  SiShadcnui,
  SiTailwindcss,
  SiReactquery,
  SiCss3,
  SiReactrouter,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import HeadingChip from "./ui/heading-chip";

export default function Techs() {
  const Tech = [
    {
      name: "React",
      icon: <FaReact className="h-8 w-8 text-primary" />,
      href: "https://react.dev/",
    },

    {
      name: "React Query",
      icon: <SiReactquery className="h-8 w-8 text-primary" />,
      href: "https://tanstack.com/query/latest",
    },
    {
      name: "React Router",
      icon: <SiReactrouter className="h-8 w-8 text-primary" />,
      href: "https://reactrouter.com/",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="h-8 w-8 text-primary" />,
      href: "https://tailwindcss.com/",
    },
    {
      name: "CSS",
      icon: <SiCss3 className="h-8 w-8 text-primary" />,
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "shadcn/ui",
      href: "https://ui.shadcn.com/",
      icon: <SiShadcnui className="h-8 w-8 text-primary" />,
    },
    {
      name: "Motion",
      icon: <TbBrandFramerMotion className="h-8 w-8 text-primary" />,
      href: "https://motion.dev/docs/react-quick-start",
    },
  ];

  return (
    <div className="flex flex-col justify-center gap-6">
      <HeadingChip
        className="font-robotoMono font-medium"
        textColor="text-primary"
        bgColor="bg-primary/10"
      >
        Technologies & Tools
      </HeadingChip>
      <div className="rounded-lg border-2 border-primary/70 p-6">
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {Tech.map((tech, index) => (
            <motion.div className="flex flex-col items-center" key={index}>
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
              <motion.p className="text-sm text-primary text-center font-robotoMono">
                {tech.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
