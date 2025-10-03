import GlassCard from "./GlassCard";

export default function ExperiencesSection({ darkMode = false }) {
  const experiences = [
    {
      section: "EXPERIENCES.",
      items: [
        {
          title: "Volunteer English Teacher",
          time: "April - May 2025 (2 Months.)",
          description:
            "I volunteered as an English teacher for a team of five, creating lesson materials and presentations for 6th-grade students and delivering interactive lessons in the classroom. This experience strengthened my communication and teamwork skills, while giving me hands-on practice in lesson planning, presenting, and guiding students through learning in an engaging way.",
          tags: ["Teaching", "Communication", "Leadership"],
        },
        {
          title: "Freelance Documentary Video Editor",
          time: "June - December 2023 (6 Months.)",
          description:
            "I worked with clients to edit documentary films, ensuring both storytelling flow and technical polish. Beyond editing, I managed feedback cycles, delivered revisions under tight deadlines, and maintained strong communication to meet client expectations.",
          tags: ["Editing", "Creativity", "Collaboration"],
        },
      ],
    },
  ];

  
  const textColor = darkMode ? "#d1d5db" : "#1F2937"; 
  const descColor = darkMode ? "#d1d5db" : "#4B5563"; 

  return (
    <div style={{ fontFamily: "Fredoka, sans-serif" }} className="group/list">
      {experiences.map((section, idx) => (
        <div key={idx} className="mb-12">
          <h2
            className={`text-xl font-bold mb-0 transition-colors duration-300 ${
              darkMode ? "text-[#22ddd2]" : "text-[#EAA64D]"
            }`}
          >
            {section.section}
          </h2>
          <div className="space-y-6 ml-[-3px]">
            {section.items.map((exp, i) => (
              <GlassCard
                key={i}
                {...exp}
                darkMode={darkMode} 
                titleColor={textColor}
                descColor={descColor}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
