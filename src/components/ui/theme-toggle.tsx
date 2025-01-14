import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  function handleThemeChange() {
    if (theme === "dark") setTheme("light");

    if (theme === "light") setTheme("dark");
  }

  return (
    <div
      onClick={handleThemeChange}
      className="flex aspect-square h-full items-center space-x-2 rounded-full p-2 transition-colors duration-200 hover:bg-primary/50"
    >
      {theme === "dark" ? (
        <AnimatePresence>
          <motion.div
            layout
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
            }}
          >
            <Sun className="w-4" />
          </motion.div>
        </AnimatePresence>
      ) : null}
      {theme === "light" ? (
        <AnimatePresence>
          <motion.div
            layout
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
            }}
          >
            <Moon className="w-4" />
          </motion.div>
        </AnimatePresence>
      ) : null}
    </div>
  );
}
