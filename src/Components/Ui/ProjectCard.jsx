import { ExternalLink, GitBranch, TrendingUp } from "lucide-react";
import React from "react";

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    image,
    category,
    technologist,
    metrics,
    demoUrl,
    githubUrl,
  } = project;
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primar/30 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 "></div>
        <div className="absolute bottom-4 right-4 flex items-center gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View Demo"
              className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 
              hover:scale-110"
            >
              <ExternalLink className="w-4 h-4 text-white"></ExternalLink>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View Code"
              className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 
              hover:scale-110"
            >
              <GitBranch className="w-4 h-4 text-white"></GitBranch>
            </a>
          )}
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full">{category}</span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#A8FF8D] transition-colors duration-300">{title}</h3>
          <p className="text-white/60 text-sm leading-relaxed line-clamp-2 ">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologist.map((tech, index) => (
            <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors duration-200" key={index}>
              {tech}
            </span>
          ))}
        </div>
        {metrics && (
          <div className="flex items-center gap-2 pt-3 border-t border-white/10">
            <TrendingUp className="w-4 h-4 text-green-400"></TrendingUp>
            <p className="text-sm font-medium text-green-400">{metrics}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
