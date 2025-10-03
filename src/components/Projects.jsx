import { useState, useEffect } from "react";
import GlassCard from "./GlassCard";
import testImg from "../assets/test.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects({ darkMode = false }) {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";   
    } else {
      document.body.style.overflow = "auto";     
    }
    return () => {
      document.body.style.overflow = "auto";     
    };
  }, [activeProject]);

  const projects = [
    {
      title: "Mood Bridge",
      time: "2025",
      description:"A website based on Next.js, Golang, and machine learning to detect the mental state of the user.",
      completedesc: "Mood Bridge is a social web app built with the T3 stack and Golang, designed like Twitter but enhanced with AI-powered mental health detection. Posts are analyzed using an ensemble of CatBoost, XGBoost, and LightGBM to classify states such as normal, stressed, depressed, or suicidal. Beyond detection, users can connect with others allowing those struggling to be supported by healthier peers and access a built-in chatbot for conversational help.",
      image: "./src/assets/project1/3.png",
      tags: ["Next.js", "Golang", "Machine Learning"],
      showcase: ["./src/assets/project1/1.png", "./src/assets/project1/2.png", "./src/assets/project1/3.png", "./src/assets/project1/4.png", "./src/assets/project1/5.png"],
    },
    {
      title: "Research Paper (Unpublished)",
      time: "2025",
      description:
        "Rehearsal-Based Fine-Tuning Approach to Mitigate Catastrophic Forgetting in Accent Classification with ECAPA-TDNN",
      completedesc: "This research investigates catastrophic forgetting in accent classification using the ECAPA-TDNN model. While standard fine-tuning caused the model to lose accuracy on previously learned accents, we proposed a rehearsal-based fine-tuning approach that reintroduces samples from older accents during training. Tested on the AfriSpeech-200 dataset, the method improved overall accuracy from 72.43% to 76.92%, showing that simple rehearsal strategies can preserve past knowledge while enhancing generalization to new accents.",
      image: "./src/assets/project2/1.jpg",
      tags: ["Research", "Speech Recognition", "Fine Tuning"],
      showcase: ["./src/assets/project2/1.jpg", "./src/assets/project2/2.jpg", "./src/assets/project2/3.jpg", "./src/assets/project2/4.jpg", "./src/assets/project2/5.jpg"],
    },
    {
      title: "Hotel Website UI/UX Design",
      time: "2024",
      description:
        "A conversational assistant powered by transformers, deployed as a web app.",
      completedesc: "A hotel website UI/UX design created in Figma, focusing on a clean layout, intuitive navigation, and modern visuals to enhance user booking experience. The design emphasizes accessibility, responsive structure, and a professional aesthetic suitable for hospitality brands.",
      image: "./src/assets/project3/1.png",
      tags: ["Figma", "Design", "UI/UX"],
      showcase: ["./src/assets/project3/1.png", "./src/assets/project3/2.png", "./src/assets/project3/3.png", "./src/assets/project3/4.png", "./src/assets/project3/5.png", "./src/assets/project3/6.png", "./src/assets/project3/7.png", "./src/assets/project3/8.png"],
    },
  ];

  return (
    <div style={{ fontFamily: "Fredoka, sans-serif" }} className="group/list">
      <h2 className={`text-xl font-bold mb-4 transition-colors duration-300 ${darkMode ? "text-[#22ddd2]" : "text-[#EAA64D]"}`}>PROJECTS.</h2>
      <div className="space-y-6 ml-[-1px]">
        {projects.map((proj, i) => (
          <div
            key={i}
            onClick={() => setActiveProject(proj)}
            className="cursor-pointer"
          >
            <GlassCard {...proj} darkMode={darkMode} />
          </div>
        ))}
      </div>

      {/* Fullscreen Showcase */}
      <AnimatePresence>
        {activeProject && (
            <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-[9999] flex items-center justify-center transition-colors duration-300 ${darkMode ? "bg-[#0F172A]" : "bg-[#0F172A]"}`}
            onClick={() => setActiveProject(null)}
            >

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`rounded-xl p-6 max-w-5xl w-full h-[90%] overflow-y-auto relative shadow-2xl showcase-scroll ${darkMode ? "bg-[#0F172A]" : "bg-[#0F172A]"}`}
              onClick={(e) => e.stopPropagation()}
              style={{ overscrollBehavior: "contain" }} 
            >
              {/* Close button */}
              <button
                className={`absolute top-4 right-4 text-2xl pointer-events-auto transition-colors duration-300 ${darkMode ? "text-white hover:text-[#22ddd2]" : "text-white-900 hover:text-[#EAA64D]"}`}
                onClick={() => setActiveProject(null)}
              >
                ✖
              </button>

              {/* Title + desc */}
              <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${darkMode ? "text-[#22ddd2]" : "text-[#EAA64D]"}`}>
                {activeProject.title}
              </h3>
              <p className={`mb-6 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-300"}`}>{activeProject.completedesc}</p>

              {/* Showcase images */}
              <div className="space-y-6">
                {activeProject.showcase.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`${activeProject.title} showcase ${i + 1}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    className="w-full rounded-lg shadow-lg object-cover"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
