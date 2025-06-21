import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

const skills = [
  {
    title: "HTML & CSS",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    title: "Javascript",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    title: "Webflow",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
];

const About = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 rounded-4xl m-7">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
        {/* Left Title */}
        <div className="mb-10 lg:mb-0 space-y-10">
          <div className="flex items-center">
            <ArrowDown className="border-1 rounded-full h-9 w-9" />
            <button className="border px-4 py-1 rounded-full flex items-center gap-2">
              <span className="text-xl"></span> Why Choose me
            </button>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            My Extensive
            <br />
            List of Skills
          </h2>
        </div>

        {/* Right Description + Arrows */}
        <div className="lg:w-2/5 flex flex-col gap-6">
          <p className="text-gray-300 text-2xl text-right leading-relaxed border-b-1 pb-10">
            Building the world’s best marketing Your trusted partner for
            strategy, design, and dev.
          </p>
          <div className="flex gap-4 justify-end">
            <button className="w-12 h-12 border rounded-full flex items-center justify-center">
              <ArrowLeft />
            </button>
            <button className="w-12 h-12 border rounded-full flex items-center justify-center">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Skill Cards */}
      <div className="flex flex-col md:flex-row">
        {skills.map((skill, index) => (
          <div
            key={skill.title}
            className={`
              bg-[#ffffff0d] px-15 py-24 rounded-4xl w-full md:w-1/3
              ${index === 1 ? "rotate-[5deg] translate-y-2" : ""}
              transition-transform duration-300
            `}
          >
            {/* You can replace this with an SVG icon */}
            <div className="mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="icon"
                className="w-32 h-32"
              />
            </div>
            <h1 className="text-4xl font-bold mb-3">{skill.title}</h1>
            <p className=" text-gray-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default About;
