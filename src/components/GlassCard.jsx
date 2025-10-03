export default function GlassCard({ image, title, time, description, tags = [], darkMode = false }) {
  return (
    <div
      className={`group mb-10 rounded-lg overflow-hidden transition-all duration-300
                  hover:scale-[1.02] hover:z-10
                  hover:!opacity-100 
                  group-hover/list:opacity-50
                  hover:shadow-xl hover:shadow-black/25
                  ${darkMode ? "hover:bg-[#0C487E]/50" : "hover:bg-[#0C487E]/50"}`} // same hover bg
    >
      {/* Image */}
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="pt-2 pr-2 pb-2 pl-1 text-left">
        <h3
          className={`text-lg font-bold transition-colors duration-300 ${
            darkMode ? "text-gray-300 group-hover:text-[#22ddd2]" : "text-slate-200 group-hover:text-[#EAA64D]"
          }`}
        >
          {title}
        </h3>
        {time && (
          <p
            className={`text-sm mb-1 transition-colors duration-300 ${
              darkMode ? "text-gray-400" : "text-slate-400"
            }`}
          >
            {time}
          </p>
        )}
        <p
          className={`mb-2 transition-colors duration-300 ${
            darkMode ? "text-gray-300" : "text-slate-300"
          }`}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                darkMode
                  ? "bg-[#22ddd2]/7 text-[#22ddd2]"
                  : "bg-[#EAA64D]/10 text-[#EAA64D]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
