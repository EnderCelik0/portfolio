import AboutMe from "./components/AboutMe";
import { ExpandableCardDemo } from "./components/expandable-cards";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  // TODO : KULLANILAN TEKNOLOJILER SAYFASI
  // TODO : SINGLE EXPANDABLE CARD TASARIMI SIFIRDAN FRAMER MOTIONLA

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background p-12 selection:bg-primary selection:text-background">
        <div className="mx-auto max-w-screen-md font-geist">
          <AboutMe />
          <ExpandableCardDemo />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
