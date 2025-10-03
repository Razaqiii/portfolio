import { useState, useEffect } from "react";
import AnimatedTextRoad from "./components/AnimatedTextRoad";
import MainContent from "./components/MainContent";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

useEffect(() => {
  const timer = setInterval(() => {
    setProgress((p) => {
      if (p >= 100) {
        clearInterval(timer);
        return 100;
      }

      const increment = Math.random() > 0.4 
        ? Math.floor(Math.random() * 12) + 3  
        : 0; 

      return Math.min(100, p + increment);
    });
  }, 120); 
  return () => clearInterval(timer);
}, []);




  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('overflow-hidden');
      document.documentElement.classList.add('overflow-hidden');

      const preventScroll = (e) => e.preventDefault();
      const preventKeyScroll = (e) => {
        if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) {
          e.preventDefault();
        }
      };

      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', preventKeyScroll);

      return () => {
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
        window.removeEventListener('keydown', preventKeyScroll);
      };
    } else {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [isLoading]);

  return (
    <div className="bg-custom-gradient text-white min-h-screen">
      {isLoading && (
        <LoadingScreen
          progress={progress}
          darkMode={darkMode}
          onComplete={() => setIsLoading(false)}
        />
      )}

      <div
        className={`transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {!activeProject && (
          <>
            <div className="fixed top-0 left-4 h-full hidden xl:block transform rotate-180 z-1">
              <AnimatedTextRoad direction="up" darkMode={darkMode} />
            </div>
            <div className="fixed top-0 right-4 h-full hidden xl:block z-1">
              <AnimatedTextRoad direction="up" darkMode={darkMode} />
            </div>
          </>
        )}

        <MainContent
          activeProject={activeProject}
          setActiveProject={setActiveProject}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
    </div>
  );
}