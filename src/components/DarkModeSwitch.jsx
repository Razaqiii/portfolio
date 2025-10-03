import React from "react";

export default function DarkModeSwitch({ darkMode, setDarkMode }) {
  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className={`relative w-13 h-6 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-300"
      }`}
    >
      {/* Minimal indicators */}
      <div className="absolute left-1.5 w-1.5 h-1.5 rounded-full bg-[#1c9b93ff] opacity-100"></div>
      <div className="absolute right-1.5 w-1.5 h-1.5 rounded-full bg-[#EAA64D] opacity-70"></div>

      {/* Handle */}
      <div
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform duration-300`}
        style={{
          transform: darkMode ? "translateX(1.75rem)" : "translateX(0rem)",
        }}
      ></div>
    </div>
  );
}
