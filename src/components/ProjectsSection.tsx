import { useScroll } from "@/contexts/ScrollContext";
import { useTheme } from "@/contexts/ThemeContext";
import { projects } from "@/utils";
import Image from "next/image";

const ProjectsSection = () => {
  const { darkMode } = useTheme();
  const { visibleElements } = useScroll();
  return (
    <section id="projects" className=" py-20 lg:py-32 px-6 lg:px-8">
      <div className=" max-w-7xl mx-auto">
        <h2 className=" text-4xl lg:text-5xl font-bold text-center mb-16">
          Featured{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className=" grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <a
              target="_blank"
              href={project.link}
              key={i}
              data-animate
              id={`project-${i}`}
              className={`group ${
                darkMode ? "bg-white/3" : "bg-white"
              } backdrop-blur-md rounded-2xl overflow-hidden border ${
                darkMode ? "border-white/5" : "border-gray-200"
              } hover:border-purple-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-400 ${
                visibleElements.has(`project-${i}`)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div
                className={`relative h-48 md:h-56 xl:h-64 overflow-hidden ${
                  darkMode
                    ? "from-indigo-900/20 to-purple-900/20"
                    : "from-indigo-50 to-purple-50"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className=" w-full h-full object-fit opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"
                />
                <div
                  className={`absolute inset-0 ${
                    darkMode
                      ? " bg-gradient-to-t from-zinc-950 to-transparent"
                      : " bg-gradient-to-t from-gray-50 to-transparent"
                  } opacity-65`}
                ></div>
              </div>
              <div className=" p-6">
                <h3 className=" text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p
                  className={`${
                    darkMode ? " text-gray-400" : " text-gray-600"
                  } leading-relaxed mb-6`}
                >
                  {project.desc}
                </p>
                <div className=" flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-2 ${
                        darkMode
                          ? " bg-indigo-500/10 border-purple-500/30"
                          : " bg-indigo-50 border-indigo-200"
                      } border rounded-full text-xs text-indigo-400`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
