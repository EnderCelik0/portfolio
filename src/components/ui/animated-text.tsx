import { motion, Variants } from "framer-motion";

export default function AnimatedText({
  text,
  delay,
}: {
  text: string;
  delay: number;
}) {
  const words = text.split("");

  const textVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: 30,
    },
    onscreen: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      {words.map((word, index) => (
        <motion.span
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          transition={{ delay: index * delay }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}
