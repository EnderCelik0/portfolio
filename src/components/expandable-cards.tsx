import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Cammegh from "../assets/cammegh/Cammegh (1).png";
import Motor from "../assets/motor-config.png";
import Trunk from "../assets/trunk-config.png";
import Watch from "../assets/watch-config.png";
import HeadingChip from "./ui/heading-chip";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null,
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-white dark:bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[90%]"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="h-80 w-full object-cover sm:rounded-tl-lg sm:rounded-tr-lg lg:h-80"
                />
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-base font-medium text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-base text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="rounded-full bg-green-500 px-4 py-3 text-sm font-bold text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] dark:text-neutral-400 md:h-fit md:text-sm lg:text-base"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="flex flex-col items-center gap-6">
        <HeadingChip textColor="text-primary" bgColor="bg-primary/10">
          Projects
        </HeadingChip>
        <ul className="mx-auto grid w-full grid-cols-1 items-start gap-4 md:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="flex cursor-pointer flex-col rounded-xl p-2 transition-colors duration-200 hover:bg-primary/30"
            >
              <div className="flex w-full flex-col gap-4">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-60 w-full rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="flex flex-col items-center justify-center">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="text-center text-base font-medium text-neutral-800 dark:text-neutral-200 md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-center text-base text-neutral-600 dark:text-neutral-400 md:text-left"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </ul>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Roulette Configurator",
    title: "Cammegh Roulette Configurator",
    src: Cammegh,
    ctaText: "Visit",
    ctaLink: "https://cmghtest.netlify.app/",
    content: () => {
      return (
        <ul className="flex flex-col gap-4">
          {cardFeatures.roulette.map((feature) => (
            <li className="flex gap-2">
              <span className="text-primary">-</span>
              {feature}
            </li>
          ))}
        </ul>
      );
    },
  },
  {
    description: "Watch Configurator",
    title: "Watch Configurator",
    src: Watch,
    ctaText: "Visit",
    ctaLink: "https://watchconfeegurator.netlify.app/",
    features: [
      "Customize the watch face with a variety of styles and colors",
      "Add a personalized message to the watch face",
      "Choose the watch strap and band color",
      "Preview the watch before finalizing the design",
    ],
    content: () => {
      return (
        <ul className="flex flex-col gap-4">
          {cardFeatures.watch.map((feature) => (
            <li key={feature}>
              <span className="text-primary">-</span> {feature}
            </li>
          ))}
        </ul>
      );
    },
  },
  {
    description: "Motorcycle Configurator",
    title: "Motorcycle Configurator",
    src: Motor,
    ctaText: "Visit",
    ctaLink: "https://codeoconfigurator.netlify.app/",
    content: () => {
      return (
        <ul className="flex flex-col gap-4">
          {cardFeatures.motorcycle.map((feature) => (
            <li key={feature}>
              <span className="text-primary">-</span> {feature}
            </li>
          ))}
        </ul>
      );
    },
  },
  {
    description: "Luxury Trunk Configurator",
    title: "Luxury Trunk Configurator",
    src: Trunk,
    ctaText: "Visit",
    ctaLink: "https://luxurytrunkconfeegurator.netlify.app/",
    content: () => {
      return (
        <ul className="flex flex-col gap-4">
          {cardFeatures.trunk.map((feature) => (
            <li key={feature}>
              <span className="text-primary">-</span> {feature}
            </li>
          ))}
        </ul>
      );
    },
  },
];

const cardFeatures = {
  roulette: [
    "Customize the roulette wheel with a variety of materials and colors",
    "You can mail the roulette wheel link to yourself",
    "Automatically generate custom roulette wheel when entering with the custom link",
    "You can take a screenshot of the roulette wheel and share it with your friends",
    "Adjust the settings of the roulette wheel quality",
    "Rule based material selection",
    "Dynamic version connected with API",
    "Responsive design",
  ],
  watch: [
    "Customize the watch face with a variety of styles and colors",
    "Add a personalized message to the watch face",
    "Choose the watch strap and band color",
    "Preview the watch before finalizing the design",
  ],
  motorcycle: [
    "Customize the motorcycle with a variety of styles and colors",
    "Add a personalized message to the motorcycle",
    "Choose the motorcycle size",
    "Preview the motorcycle before finalizing the design",
  ],
  trunk: [
    "Customize the motorcycle parts with a variety of materials and colors",
    "Preview the trunk before finalizing the design",
  ],
};
