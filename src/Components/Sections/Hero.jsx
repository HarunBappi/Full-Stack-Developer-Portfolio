import React from "react";
import RadialGradientBackground from "../Backgrounds/RadialGradientBackground";
import FadeIn from "../Animations/FadeIn";
import { ChevronDown, Star } from "lucide-react";
import { ABOUT_STATS, PERSONAL_INFO} from "../../utilities/constants";
import { scrollToSection } from "../../Hooks/useScrollSpy";
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <RadialGradientBackground variant="hero"></RadialGradientBackground>
      {/* Contant Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-7 lg:px-8 py-25 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left Column - Content */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-4.5 py-2.75 mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <Star className="w-4 h-4 text-white fill-white"></Star>
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-6 leading-tight">
                Full Stack Developer
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-137.5 mb-8">
                Building Modern, Scalable Web Applications with React,
                JavaScript and Cutting-edge Technologies. Transforming ideas
                into Exceptional digital Experience.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex gap-0 items-center mb-12 group"
              >
                <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-6.5 py-3.25 text-base font-medium border border-white hover:bg-white/90 transition-all duration-300">
                  Get in Touch
                </div>
              </button>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {ABOUT_STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="text-left border-r border-white/50 pr-10  last:border-r-0"
                  >
                    <div className="text-2xl font-normal text-primary mb-2 font-mono">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          {/* Right Column Developer Image */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-125 ml-auto group">
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute -inset-0.5 bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                </div>
                {/* Image Container */}
                <div className="bg-black relative rounded-2xl overflow-hidden m-px h-[calc(100%-2px)]">
                  <img
                    src="/developer.png"
                    alt="Developer at Work"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Technology Logos */}
                <div className="absolute bottom-6 left-6 z-20">
                  <FadeIn delay={500}>
                    <div className="flex items-center bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3 gap-5">
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiReact className="w-full h-full text-primary "></SiReact>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiNextdotjs className="w-full h-full text-primary "></SiNextdotjs>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiNodedotjs className="w-full h-full text-primary "></SiNodedotjs>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiTailwindcss className="w-full h-full text-primary "></SiTailwindcss>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiMongodb className="w-full h-full text-primary "></SiMongodb>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      {/* Scroll Indicator */}
      <button
      onClick={()=>scrollToSection('about')}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
       >
        <ChevronDown className="w-8 h-8 text-primary"></ChevronDown>
      </button>
    </section>
  );
};

export default Hero;
