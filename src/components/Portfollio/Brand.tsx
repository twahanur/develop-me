import React from "react";

const brands = [
  {
    name: "CSSWINNER",
    style: { transform: "translate(0rem, 0rem) rotate(0deg)" },
    bg: "bg-white",
    text: "text-black",
  },
  {
    name: "awwwards.",
    style: { transform: "translate(7rem, -5rem) rotate(11deg)" },
    bg: "bg-black",
    text: "text-white",
  },
  {
    name: "/thoughtworks",
    style: { transform: "translate(21.3rem, -1.2rem) rotate(-9deg)" },
    bg: "bg-white",
    text: "text-black",
  },
  {
    name: "facebook",
    style: { transform: "translate(38rem, -6.6rem) rotate(3deg)" },
    bg: "bg-white",
    text: "text-black",
  },
  {
    name: "AUTODESK",
    style: { transform: "translate(40.5rem, 0rem) rotate(0deg)" },
    bg: "bg-white",
    text: "text-black",
  },
  {
    name: "CSSDesignAwards",
    style: { transform: "translate(52.7rem, -3rem) rotate(11deg)" },
    bg: "bg-white",
    text: "text-black",
  },
];

const Brand: React.FC = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col md:flex-row md:items-center relative">
        <h3 className="text-2xl md:text-5xl text-start font-semibold w-full md:w-1/4 shrink-0">
          PREVIOUSLY <br />
          WORKED ON
        </h3>

        {/* Desktop layout */}
        <div className="hidden md:block relative w-full h-[280px]">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              style={brand.style}
              className={`absolute bottom-0 border border-black px-15 py-5 rounded-full text-3xl font-normal shadow-md ${brand.bg} ${brand.text}`}
            >
              {brand.name}
            </div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-wrap gap-4 justify-center">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className={`border border-black px-6 py-3 rounded-full text-base font-semibold shadow-md ${brand.bg} ${brand.text}`}
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
