import React from "react";
import { skill } from "../../Data/skill";

const Skills = () => {
  // Skill Categories
  const skillCategories = {
    "Frontend Development": [
      skill.find((s) => s.name === "React.js"),
      skill.find((s) => s.name === "JavaScript"),
      skill.find((s) => s.name === "Tailwind CSS"),
      skill.find((s) => s.name === "Next.js"),
      skill.find((s) => s.name === "Redux"),
    ].filter(Boolean),
    "Backend & APIs": [
      skill.find((s) => s.name === "Node.js"),
      skill.find((s) => s.name === "Rest APIs"),
    ].filter(Boolean),
    "Tools & Others": [
      skill.find((s) => s.name === "Git & GitHub"),
      skill.find((s) => s.name === "Responsive Design"),
      skill.find((s) => s.name === "Figma"),
      skill.find((s) => s.name === "Vite"),
    ].filter(Boolean),
  };
  // Get Proficiency Level
  const getProficiencyLevel = (level) => {
    const levels = {
      Expert: 95,
      Advanced: 80,
      Intermediate: 60,
    };
    return levels[level] || 50;
  };

  //   Get Level Color
  const getLevelColor = (level) => {
    const colors = {
      Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30",
      Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
      Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
    };
    return colors[level] || "text-gray-400 bg-gray-500/20 border-gray-500/30";
  };
  return <div>skills</div>;
};

export default Skills;
