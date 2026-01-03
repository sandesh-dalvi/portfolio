import { useScroll } from "@/contexts/ScrollContext";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

import aboutImage from "@/assets/about.jpg";

const AboutSection = () => {
  const { darkMode } = useTheme();
  const { visibleElements } = useScroll();
  return (
    <section
      id="about"
      className={`py-24 px-6 ${
        darkMode ? " bg-gray-800/50" : " bg-white/50"
      } backdrop-blur-sm relative`}
    >
      <div className=" absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,100 Q 200,150 400,100 T 800,100"
            stroke={darkMode ? "#6366f1" : "#8b5cf6"}
            strokeWidth="3"
            fill="none"
            opacity="0.5"
          >
            <animate
              attributeName="d"
              values="M 0,100 Q 200,150 400,100 T 800,100; M 0,120 Q 200,80 400,120 T 800,120; M 0,100 Q 200,150 400,100 T 800,100"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      <div className=" max-w-6xl mx-auto relative z-10">
        <h2
          data-animate
          id="about-title"
          className={` text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${
            visibleElements.has("about-title")
              ? "opacity-100 translate-y-0"
              : " opacity-0 translate-y-10"
          }`}
        >
          About{" "}
          <span className=" bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className=" grid md:grid-cols-2 gap-12 items-center">
          <div
            data-animate
            id="about-text"
            className={`transition-all duration-1000 delay-200 ${
              visibleElements.has("about-text")
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-lg mb-6 opacity-90">
              I&apos;m a passionate Full-stack developer with 3+ years of
              experience building responsive, user-focused web applications. I
              enjoy turning complex problems into simple, elegant solutions
              using modern front-end and full-stack technologies.
            </p>
            <p className="text-lg mb-6 opacity-90">
              My core expertise lies in JavaScript, React, Next.js, and modern
              CSS, along with backend experience using Node.js, Express, and
              databases like MongoDB, PostgreSQL and MySQL. I focus on writing
              clean, maintainable code and building interfaces that are both
              performant and visually polished.
            </p>
            <p className="text-lg opacity-90">
              I&apos;m always eager to learn new tools, improve my craft, and
              collaborate with teams that value quality and innovation. Whether
              it&apos;s translating designs into high-quality UI or building
              scalable features, I take pride in delivering work that creates
              real impact.
            </p>
          </div>
          <div className=" hidden md:flex">
            <Image
              src={aboutImage}
              alt="About"
              className=" rounded-2xl shadow-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
