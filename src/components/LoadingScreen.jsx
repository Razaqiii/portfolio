import { useState, useEffect } from 'react';

export default function LoadingScreen({ progress, onComplete, darkMode }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 500);
      }, 500);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  const accentColor = '#EAA64D';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center h-screen transition-opacity duration-500 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center w-64">
        <div
          className="text-6xl mb-8"
          style={{
            color: accentColor,
            fontFamily: 'Modak, cursive',
          }}
        >
          {progress}%
        </div>

        <div className="h-2 bg-yellow-900/30 dark:bg-yellow-700/50 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: accentColor,
            }}
          />
        </div>
      </div>
    </div>
  );
}