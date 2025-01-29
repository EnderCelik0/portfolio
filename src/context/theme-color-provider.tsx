import setGlobalColorTheme, {
  ThemeColors,
  ThemeColorStateProps,
} from "@/lib/theme-colors";
import { ThemeProviderProps, useTheme } from "./theme-provider";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeColorStateProps>(
  {} as ThemeColorStateProps,
);

export default function ThemeDataProvider({ children }: ThemeProviderProps) {
  const getSavetThemeColor = () => {
    try {
      return (localStorage.getItem("theme-color") as ThemeColors) || "Violet";
    } catch {
      return "Violet";
    }
  };

  const [themeColor, setThemeColor] = useState<ThemeColors>(
    getSavetThemeColor() as ThemeColors,
  );

  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    localStorage.setItem("theme-color", themeColor);
    setGlobalColorTheme(theme as "light" | "dark", themeColor);
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [theme, themeColor]);

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
