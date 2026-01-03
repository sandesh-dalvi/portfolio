import { useScroll } from "@/contexts/ScrollContext";
import { useTheme } from "@/contexts/ThemeContext";
import { skills } from "@/utils";

const SkillsSection = () => {
  const { darkMode } = useTheme();
  const { visibleElements } = useScroll();
  return (
    <section
      id="skills"
      className={`py-20 lg:py-32 px-6 lg:px-8 ${
        darkMode ? " bg-white/[0.02]" : " bg-gray-100/50"
      }`}
    >
      <div className=" max-w-7xl mx-auto">
        <h2 className=" text-4xl lg:text-5xl font-bold text-center mb-6">
          Skills &{" "}
          <span className=" bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p
          className={`text-center ${
            darkMode ? " text-gray-400" : " text-gray-600"
          } mb-16 text-lg`}
        >
          My technical expertise
        </p>

        <div className=" space-y-16">
          <div className=" flex flex-wrap justify-center items-center gap-6">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div
                  key={i}
                  className={`${
                    darkMode ? " bg-white/[0.03]" : " bg-white"
                  } backdrop-blur-sm rounded-xl p-6 relative overflow-hidden flex flex-col gap-2 justify-center items-center`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}
                  >
                    {<Icon className={` w-8 h-auto font-bold text-white `} />}
                  </div>
                  <div className="">
                    <h4 className=" text-sm">{skill.name}</h4>
                  </div>

                  <div
                    className={`absolute  bottom-0 left-0 h-2 w-full ${
                      darkMode ? "bg-white/20 " : " bg-gray-400"
                    }  `}
                  ></div>

                  <div
                    className={`absolute left-0 bottom-0 h-2 bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:shadow-lg rounded-r-full`}
                    style={{
                      width: skill.level ? skill.level + "%" : "0%",
                      transitionDelay: `${i * 0.05}s`,
                    }}
                  >
                    <div className="absolute inset-0 w-full bg-white/20 animate-shimmer"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
