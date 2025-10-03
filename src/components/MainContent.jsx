import { useEffect, useState, useRef } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import ExperiencesSection from "./Experiences";
import Projects from "./Projects";
import DarkModeSwitch from "./DarkModeSwitch";

function Section({ id, children }) {
  return (
    <section
      id={id}
      style={{ scrollMarginTop: "96px" }}
      className="mb-20"
    >
      {children}
    </section>
  );
}

export default function MainContent({ activeProject, setActiveProject, darkMode, setDarkMode }) {
  const [mouse, setMouse] = useState({ x: -100, y: -100 });
  const [activeSection, setActiveSection] = useState("about");
  const rightColumnRef = useRef(null);

  const navItems = [
    { id: "about", label: "ABOUT." },
    { id: "experiences", label: "EXPERIENCES." },
    { id: "projects", label: "PROJECTS." },
  ];

  const sectionContent = {
    about: (
      <Section id="about">
        <h2
          style={{ fontFamily: "Fredoka, sans-serif" }}
          className={`text-xl font-bold mb-1 transition-colors duration-300 ${
            darkMode ? "text-[#22ddd2]" : "text-[#EAA64D]"
          }`}
        >
          ABOUT ME.
        </h2>
        <p
          style={{ fontFamily: "Fredoka, sans-serif", fontWeight: 400 }}
          className={`text-xl mb-6 transition-colors duration-300`}
        >
          Hello!👋 I'm Zaqi, a Computer Science undergraduate specializing in Intelligent Systems. I build machine learning solutions, explore new methods in AI research, and design web experiences that merge technology with creativity.
        </p>
        <p
          style={{ fontFamily: "Fredoka, sans-serif", fontWeight: 400 }}
          className={`text-xl transition-colors duration-300`}
        >
          Outside of code, I’ve edited stories, taught kids, and trained as a martial arts athlete. I’m currently seeking opportunities where I can bring both logic and creativity to the table.
        </p>
      </Section>
    ),
    experiences: (
      <Section id="experiences">
        <ExperiencesSection darkMode={darkMode} />
      </Section>
    ),
    projects: (
      <Section id="projects">
        <Projects darkMode={darkMode} />
      </Section>
    ),
  };

  useEffect(() => {
    const moveOrb = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveOrb);
    return () => window.removeEventListener("mousemove", moveOrb);
  }, []);

  useEffect(() => {
    const rightColumnNode = rightColumnRef.current;
    if (!rightColumnNode) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    const sections = rightColumnNode.querySelectorAll("section[id]");
    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>


      <div
        style={{
          position: "fixed",
          left: mouse.x - 400,
          top: mouse.y - 400,
          width: 800,
          height: 800,
          pointerEvents: "none",
          borderRadius: "50%",
          background: darkMode
            ? "radial-gradient(circle, rgba(21, 124, 183, 0.2) 5%,rgba(16, 14, 65, 0.2) 50%, #001629 100%)"
            : "radial-gradient(circle, rgba(160, 119, 119, 0.1) 60%, rgba(37, 104, 162, 0.02) 100%)",
          boxShadow: darkMode
            ? "0 0 80px 40px rgba(20,1,20,0.1)"
            : "0 0 60px 30px rgba(90, 122, 150,0.1)",
          zIndex: 1,
          filter: "blur(30px)",
          transition: "background 0.5s, box-shadow 0.5s",
        }}
      />

      {/* Main content */}
      <div
        className={`min-h-screen flex items-start justify-center transition-colors duration-500 ${
          darkMode ? "bg-gray-900" : ""
        }`}
      >
        <div className="z-10 w-full max-w-6xl p-8 grid grid-cols-1 md:grid-cols-5 gap-x-16 gap-y-8">
          {/* Left column */}
          <div className="md:col-span-3 flex flex-col justify-start md:sticky md:top-24 self-start">
            <div className="flex flex-col gap-2 mb-25">
              <h1
                className={`text-5xl md:text-6xl font-modak tracking-wide transition-colors duration-300 ${
                  darkMode ? "text-white" : "text-white"
                }`}
                style={{
                  fontFamily: "Modak, cursive",
                  letterSpacing: "0.08em",
                  textShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                Arfan Razaqi Rusdi
              </h1>
              <p
                className={`text-3xl font-modak tracking-wide transition-colors duration-300 ${
                  darkMode ? "text-gray-300" : "text-white"
                }`}
                style={{
                  fontFamily: "Modak, cursive",
                  letterSpacing: "0.15em",
                  textShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                Computer Science Enthusiast
              </p>
            </div>
            {/* Nav links */} 
            <div className="flex flex-col gap-4 mt-3">
              {navItems.map((item) => (
                <div key={item.id} className="relative flex items-center h-8 mb-2">
                  <a
                    href={`#${item.id}`}
                    className="relative flex items-center text-xl font-bold cursor-pointer group"
                    style={{ fontFamily: "Fredoka, sans-serif", fontWeight: 400 }}
                  >
                    <span
                      style={{
                        background: darkMode ? "#22ddd2" : "#EAA64D",
                        borderRadius: 20,
                      }}
                      className={`absolute left-0 h-[15px] z-0 transition-all duration-300 ${
                        activeSection === item.id ? "w-[25px]" : "w-[15px] group-hover:w-[25px]"
                      }`}
                    />
                    <span
                      className={`pl-8 relative z-10 transition-colors duration-300 ${
                        activeSection === item.id
                          ? darkMode
                            ? "text-[#22ddd2]"
                            : "text-[#EAA64D]"
                          : darkMode
                          ? "text-gray-300 group-hover:text-[#22ddd2]"
                          : "text-white group-hover:text-[#EAA64D]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </div>
                
              ))}
              <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>

            {/* Socials */}
            <div className="mt-40">
              <div className="pl-3 flex items-center gap-4 mb-2">
                {[
                  {Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/arfanrazaqirusdi/"},
                  {Icon: FaGithub, url: "https://github.com/Razaqiii"}, 
                  {Icon: FaInstagram, url: "https://www.instagram.com/razaqiii_/"}
                ].map(({Icon,url}, idx) => (
                  <a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: darkMode ? "#22ddd2" : "#EAA64D" }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      darkMode ? "text-gray-900 hover:opacity-80" : "text-blue-900 hover:opacity-80"
                    }`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              <p className={`text-sm transition-colors duration-300 ${
                darkMode ? "text-white-900" : "text-white-900"
              }`}>
                arfan.razaqi2808@gmail.com
              </p>
            </div>
          </div>

          {/* Right column */}
          <div
            ref={rightColumnRef}
            className={`md:col-span-2 flex flex-col gap-30 leading-relaxed pt-17 transition-colors duration-300 ${
              darkMode ? "text-gray-300" : "text-slate-300"
            }`}
          >
            {Object.values(sectionContent).map((sectionComponent, index) => (
              <div key={index}>{sectionComponent}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
