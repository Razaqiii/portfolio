import { useRef, useEffect, useState } from "react";

export default function AnimatedTextRoad({ direction = "up", width = 32, speed = 50, darkMode = false }) {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [containerHeight, setContainerHeight] = useState(500); 

  const skills = [
    "Front-end", "Python", "Hugging Face", "Machine Learning", "Debugging",
    "HHello World!", "React", "Tailwind CSS", "JavaScript", "REST APIs", "SQL", "Git"
  ];

  const singleLine = skills.join("  ●  ") + "  ●  ";
  const repeatedLine = singleLine.repeat(3);
  const textColor = darkMode ? "#22ddd2" : "#EAA64D";

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.clientHeight);
    }
  }, []);

  
  useEffect(() => {
    let animationFrame;
    let lastTime = performance.now();

    const animate = (time) => {
      const delta = (time - lastTime) / 1000; 
      lastTime = time;
      setOffset((prev) => (prev + delta * speed * (direction === "up" ? 1 : -1)) % containerHeight);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [direction, containerHeight, speed]);

  return (
    <svg
      ref={containerRef}
      width={width}
      height="100%"
      preserveAspectRatio="xMidYMin slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id="text-path" d={`M ${width / 2} 0 V ${containerHeight}`} />
      </defs>

      <g transform={`translate(0, ${-offset})`}>
<text
  fill={textColor}
  fontSize="14"
  fontWeight="bold"
  letterSpacing="2"
  textAnchor="middle"
  style={{ transition: "fill 1s ease" }}
>
  <textPath href="#text-path">{repeatedLine.toUpperCase()}</textPath>
</text>


        <text
          fill={textColor}
          fontSize="14"
          fontWeight="bold"
          letterSpacing="2"
          textAnchor="middle"
          transform={`translate(0, ${containerHeight})`}
        >
          <textPath href="#text-path">{repeatedLine.toUpperCase()}</textPath>
        </text>
      </g>
    </svg>
  );
}
