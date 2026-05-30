import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const DarkLightMood = () => {
  const [darkMood, setDarkMood] = useState(
    () => localStorage.getItem("theme") === "dark",
  );
  useEffect(() => {
    const root = document.documentElement;
    if (darkMood) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMood]);
  return (
    <div>
      <button
        className="relative w-16 h-8 flex items-center p-1 mb-5 bg-gray-300 dark:bg-gray-700 rounded-full transition"
        onClick={() => setDarkMood((prev) => !prev)}
      >
        {/* Circle */}
        <div className={`w-6 h-6 bgwhite rounded-full shadow-md transition-transform flex items-center justify-center ${darkMood ? 'translate-x-8' : "translate-x-0"}`}>
            {darkMood ? (
          <Sun className="w-4 h-4"></Sun>
        ) : (
          <Moon className="w-4 h-4"></Moon>
        )}
        </div>
      </button>
    </div>
  );
};

export default DarkLightMood;
