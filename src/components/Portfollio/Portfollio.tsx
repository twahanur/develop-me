import { ArrowDown } from "lucide-react";
import React from "react";
import Brand from "./Brand";

const Portfollio: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br pt-20 from-lime-300 via-green-100 to-white px-6 text-center">
      <div className="container mx-auto">
        <div className="">
          <div className="flex justify-end mr-0 lg:mr-30 mb-10">
            <ArrowDown className="border-1 rounded-full h-9 w-9" />
            <button className="border px-4 py-1 rounded-full flex items-center gap-2">
              <span className="text-xl"></span> About
            </button>
          </div>
        </div>
        <div className="">
          <h2 className="text-5xl sm:text-6xl lg:text-9xl font-bold space-y-5 mb-10">
            <div>
              I’ve been{" "}
              <span className="bg-black text-white px-3 pb-6 rounded-2xl inline-block">
                Developing
              </span>{" "}
            </div>
            <div>
              website since{" "}
              <span className="bg-black text-white px-3 rounded-2xl inline-block">
                2013
              </span>
            </div>
          </h2>
        </div>
        <p className="text-2xl max-w-3/5 mx-auto">
          We start every new client interaction with an in-depth discovery call
          where we get to know each other and recommend the best course of
          action.
        </p>
        <div className="px-4">
          <Brand />
        </div>
      </div>
    </section>
  );
};

export default Portfollio;
