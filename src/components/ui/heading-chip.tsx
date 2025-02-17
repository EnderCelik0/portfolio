import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function HeadingChip({
  children,
  textColor,
  bgColor,
  className,
}: {
  children: React.ReactNode;
  textColor?: string;
  bgColor?: string;
  className?: string;
}) {
  return (
    <motion.div className="self-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          `rounded-xl px-4 py-2 text-2xl font-bold text-center ${textColor} ${bgColor}
          ${className}`,
        )}
      >
        {children}
      </motion.h2>
    </motion.div>
  );
}
