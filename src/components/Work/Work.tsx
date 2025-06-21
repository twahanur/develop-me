import { ArrowDown } from "lucide-react";
import React from "react";

const processSteps = [
  {
    title: "Discovery",
    description:
      "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    title: "Strategy",
    description:
      "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
    bgColor: "bg-lime-400",
    textColor: "text-black",
  },
  {
    title: "Design",
    description:
      "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page will be designed, reviewed, and given your stamp of approval.",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    title: "Build",
    description:
      "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    bgColor: "bg-black",
    textColor: "text-white",
  },
];

const Work: React.FC = () => {
  return (
    <section className="bg-[#141414] text-white py-12 px-6 md:px-20 md:mx-8 mx-auto rounded-4xl">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-8xl font-bold">My Work Process</h2>
        <div className="flex">
          {" "}
          <ArrowDown className="border-1 rounded-full h-9 w-9" />
          <button className="border px-4 py-1 rounded-full flex items-center gap-2">
            Work Process
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className={`rounded-2xl p-10 ${step.bgColor} ${step.textColor} relative`}
          >
            <div className="flex justify-between">
              <button className="bg-mint text-xl font-semibold px-10 py-1 bg-blue-400 rounded-full mb-4">
                {step.title}
              </button>
              <div>
                <span>&rarr;</span>
              <span className="">Read More</span>
              </div>
            </div>
            <p className="mb-4">{step.description}</p>
            <a
              href="#"
              className="text-sm underline flex items-center space-x-1 hover:text-gray-400"
            ></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
