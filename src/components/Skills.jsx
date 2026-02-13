import reactIcon from '../assets/Icons/react.svg';
import reduxIcon from '../assets/Icons/redux.svg';
import jsIcon from '../assets/Icons/javascript.svg';
import htmlIcon from '../assets/Icons/html5.svg';
import cssIcon from '../assets/Icons/css.svg';
import tailwindIcon from '../assets/Icons/tailwindcss.svg';
import muiIcon from '../assets/Icons/mui.svg';
import axiosIcon from '../assets/Icons/axios.svg';
import githubIcon from '../assets/Icons/github.svg';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", img: reactIcon },
        { name: "Redux Toolkit", img: reduxIcon },
        { name: "JavaScript (ES6+)", img: jsIcon },
        { name: "HTML5", img: htmlIcon },
        { name: "CSS3", img: cssIcon },
      ],
    },
    {
      title: "UI / Styling",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Tailwind CSS", img: tailwindIcon },
        { name: "Material UI", img: muiIcon },
        { name: "Responsive Design", img: cssIcon },
      ],
    },
    {
      title: "Tools & APIs",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "REST API Integration", img: axiosIcon },
        { name: "Axios", img: axiosIcon },
        { name: "Git & GitHub", img: githubIcon },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-12 md:py-16 lg:py-20 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            My <span className="text-sky-400">Skills</span>
          </h3>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-3">
            Technologies and tools I use to build scalable, responsive, and
            production-ready web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <h4 className="text-xl font-semibold text-white mb-6">
                {category.title}
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div
                      className={`w-9 h-9 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}
                    >
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="w-5 h-5 filter brightness-0 invert"
                      />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra Skills */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-semibold mb-8 text-white">
            Other Technologies
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React Router DOM",
              "Postman",
              "MockAPI",
              "VS Code",
              "Bootstrap",
              "Agile Methodologies",
              "SEO Basics",
              "Accessibility",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-500/30 rounded-full text-sky-300 text-sm font-medium hover:bg-sky-500/30 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

