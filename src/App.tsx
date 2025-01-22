import AboutMe from "./components/AboutMe";
import { ExpandableCardDemo } from "./components/expandable-cards";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/ui/theme-toggle";
import WorkExperience from "./components/WorkExperience";

function App() {
  // TODO : KULLANILAN TEKNOLOJILER SAYFASI
  // TODO : SINGLE EXPANDABLE CARD TASARIMI SIFIRDAN FRAMER MOTIONLA

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background p-12 selection:bg-primary selection:text-background">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-12 font-geist">
          <ThemeToggle />
          <AboutMe />
          <WorkExperience />
          <ExpandableCardDemo />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
