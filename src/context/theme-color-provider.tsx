import setGlobalColorTheme, {
  ThemeColors,
  ThemeColorStateProps,
} from "@/lib/theme-colors";
import { ThemeProviderProps, useTheme } from "./theme-provider";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeColorStateProps>(
  {} as ThemeColorStateProps,
);

const DEFAULT_COLOR: ThemeColors = "Violet";

export default function ThemeDataProvider({ children }: ThemeProviderProps) {
  const getSavedThemeColor = (): ThemeColors => {
    try {
      const saved = localStorage.getItem("theme-color") as ThemeColors;
      return saved || DEFAULT_COLOR;
    } catch {
      return DEFAULT_COLOR;
    }
  };

  const [themeColor, setThemeColor] =
    useState<ThemeColors>(getSavedThemeColor());
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }

    try {
      localStorage.setItem("theme-color", themeColor);
      setGlobalColorTheme(theme as "light" | "dark", themeColor);
    } catch (error) {
      console.error("Error setting theme color:", error);
    }
  }, [theme, themeColor, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
