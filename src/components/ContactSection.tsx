import { useScroll } from "@/contexts/ScrollContext";
import { useTheme } from "@/contexts/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const { darkMode } = useTheme();
  const { visibleElements } = useScroll();
  return (
    <section
      id="contact"
      className={`py-24 px-6 ${
        darkMode ? " bg-gray-800/50" : " bg-white"
      } backdrop-blur-sm relative`}
    >
      <div className=" max-w-3xl mx-auto text-center">
        <h2 className=" text-4xl lg:text-5xl font-bold mb-6">
          Let's Work{" "}
          <span className=" bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Together
          </span>
        </h2>
        <p
          className={`text-xl ${
            darkMode ? " text-gray-400" : " text-gray-600"
          } mb-10`}
        >
          I'm always interested in hearing about new projects and opportunities.
          Let's create something amazing!
        </p>
        <a
          href="mailto:dalviss10@gmail.com"
          className=" inline-block px-10 py-4 bg-gradient-to-r bg-indigo-600 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300"
        >
          Send Message
        </a>
        <div
          data-animate
          id="contact-icons"
          className={` mt-10 flex gap-6 justify-center mb-12 transition-all duration-1000 delay-300 ${
            visibleElements.has("contact-icons")
              ? " opacity-100 scale-100"
              : " opacity-0 scale-0"
          }`}
        >
          {[
            {
              Icon: FaGithub,
              label: "Github",
              href: "https://github.com/sandesh-dalvi",
            },
            {
              Icon: FaLinkedin,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/sandesh-dalvi-35835119b/",
            },
          ].map(({ Icon, label, href }, i) => (
            <a
              href={href}
              target="_blank"
              key={i}
              className=" group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-500"
            >
              <div
                className={`p-4 rounded-full ${
                  darkMode
                    ? "bg-gray-700 group-hover:bg-indigo-500"
                    : "bg-gray-200 group-hover:bg-indigo-500"
                } transition-colors`}
              >
                <Icon
                  size={24}
                  className="group-hover:text-white transition-colors"
                />
              </div>
              <span className=" font-bold">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
