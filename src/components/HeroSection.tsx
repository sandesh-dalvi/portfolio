import { useTheme } from "@/contexts/ThemeContext";
import { ChevronDown, Github, Linkedin, Mail, User } from "lucide-react";

const HeroSection = () => {
  const { darkMode } = useTheme();
  return (
    <section
      id="home"
      className=" min-h-screen flex items-center justify-center relative px-6"
    >
      <div className=" max-w-4xl text-center relative z-10">
        <div className=" mb-8 animate-fade-in">
          <div className=" w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-1 animate-spin-slow">
            <div
              className={`w-full h-full rounded-full flex items-center justify-center ${
                darkMode ? "bg-gray-900" : "bg-gray-50"
              }`}
            >
              <User size={64} className=" text-indigo-500" />
            </div>
          </div>
        </div>

        <h1 className=" text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
          Hi, I&apos;m{" "}
          <span className=" bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Sandesh Dalvi
          </span>
        </h1>

        <p
          className=" text-xl md:text-2xl mb-8 opacity-80 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Web Developer
        </p>
        <div
          className=" flex gap-4 justify-center mb-12 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className=" px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-500"
          >
            View Work
          </a>
          <a
            href="#contact"
            className={` px-8 py-3 rounded-full font-semibold border-2 hover:scale-105 transition-all duration-500 ${
              darkMode
                ? "border-white hover:bg-white hover:text-gray-900"
                : "border-gray-900 hover:bg-gray-900 hover:text-white"
            }`}
          >
            Contact Me
          </a>
        </div>

        <div
          className=" flex gap-6 justify-center animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          {/* Social Icons */}
          <a
            href="https://github.com/sandesh-dalvi"
            target="_blank"
            className=" hover:text-indigo-500 transition-colors hover:scale-110 transform duration-300"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/sandesh-dalvi-35835119b/"
            target="_blank"
            className=" hover:text-indigo-500 transition-colors hover:scale-110 transform duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:dalviss10@gmail.com"
            target="_blank"
            className=" hover:text-indigo-500 transition-colors hover:scale-110 transform duration-300"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
      <a
        href="#about"
        className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className=" opacity-50" />
      </a>
    </section>
  );
};

export default HeroSection;
