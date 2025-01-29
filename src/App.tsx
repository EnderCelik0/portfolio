import AboutMe from "./components/AboutMe";
import { ExpandableCardDemo } from "./components/expandable-cards";
import Techs from "./components/Techs";
import { ThemeProvider } from "./context/theme-provider";
import { ThemeToggle } from "./components/ui/theme-toggle";
import WorkExperience from "./components/WorkExperience";
import ThemeDataProvider from "./context/theme-color-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ThemeDataProvider>
        <div
          className="min-h-screen bg-background p-12 selection:bg-primary
            selection:text-primary-foreground"
        >
          <div className="mx-auto flex max-w-screen-lg flex-col gap-12 font-geist">
            <ThemeToggle />
            <AboutMe />
            <WorkExperience />
            <Techs />
            <ExpandableCardDemo />
          </div>
        </div>
      </ThemeDataProvider>
    </ThemeProvider>
  );
}

export default App;
