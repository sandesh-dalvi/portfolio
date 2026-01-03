"use client";

import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { useTheme } from "@/contexts/ThemeContext";
import { useScroll } from "@/contexts/ScrollContext";

const MainSection = () => {
  const { darkMode } = useTheme();

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Background SVG Animations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{
                  stopColor: darkMode ? "#6366f1" : "#8b5cf6",
                  stopOpacity: 1,
                }}
              >
                <animate
                  attributeName="stop-color"
                  values="#6366f1;#8b5cf6;#ec4899;#6366f1"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop
                offset="100%"
                style={{
                  stopColor: darkMode ? "#ec4899" : "#6366f1",
                  stopOpacity: 1,
                }}
              >
                <animate
                  attributeName="stop-color"
                  values="#ec4899;#6366f1;#8b5cf6;#ec4899"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="25" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle
            cx="10%"
            cy="20%"
            r="300"
            fill="url(#grad1)"
            opacity="0.4"
            filter="url(#glow)"
          >
            <animate
              attributeName="cx"
              values="10%;90%;10%"
              dur="20s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="20%;80%;20%"
              dur="15s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="300;400;300"
              dur="12s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="90%"
            cy="80%"
            r="250"
            fill="url(#grad1)"
            opacity="0.4"
            filter="url(#glow)"
          >
            <animate
              attributeName="cx"
              values="90%;10%;90%"
              dur="25s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="80%;20%;80%"
              dur="18s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="250;350;250"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <HeroSection />

      <AboutSection />

      <ProjectsSection />

      <SkillsSection />

      <ContactSection />
    </main>
  );
};

export default MainSection;
