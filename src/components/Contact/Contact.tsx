// components/ContactSection.jsx
import { Send, Phone, ArrowDown, Mail } from "lucide-react";
import ButtonWithIcon from "../commom/buttonWithIcon";

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-white via-[#ddffe4] to-[#c8ff00] px-6 md:px-20 py-20 text-black">
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        {/* LEFT: Text & CTA */}
        <div className="flex-1 space-y-6">
          <div className="flex">
            {" "}
            <ArrowDown className="border-1 rounded-full h-9 w-9" />
            <button className="border px-4 py-1 rounded-full flex items-center gap-2">
              Contact
            </button>
          </div>

          <h2 className="text-4xl md:text-8xl font-bold leading-tight">
            Interested in{" "}
            <span
              className="inline-block bg-black text-transparent px-8 pb-2 rounded-4xl"
              style={{
                WebkitTextStroke: "2px white", // stroke size and color
              }}
            >
              work
            </span>{" "}
            together?
          </h2>

          <p className="text-xl text-black max-w-md">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other
          </p>

          <ButtonWithIcon className="text-3xl py-4" text={"Schedule a Call"}>
            <Phone
              size={20}
              className="mr-2 border-1 font-extrabold rounded-full w-16 h-16 p-3"
            />
          </ButtonWithIcon>
        </div>

        {/* RIGHT: Form */}
        <div className="flex-1 bg-black text-white p-8 rounded-3xl">
          <form className="space-y-10">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-black border-b border-[#c8ff00] outline-none py-3 placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-black border-b border-gray-700 outline-none py-3 placeholder-gray-400"
            />
            <textarea
              placeholder="Describe your project"
              rows={3}
              className="w-full bg-black border-b border-gray-700 outline-none py-3 placeholder-gray-400"
            ></textarea>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap items-center">
              <ButtonWithIcon className="border-white h-12 pr-8 cursor-alias" text={"send"}>
                <Send
                  className="border-white border rounded-full mr-3 p-1 "
                  size={28}
                />
              </ButtonWithIcon>
              <span className="text-lg">OR</span>

              <ButtonWithIcon
                className="border-white h-12 pr-8 cursor-pointer"
                text={"Contact me"}
              >
                <Mail
                  className="border-white border rounded-full mr-3 p-1"
                  size={28}
                />
              </ButtonWithIcon>
            </div>
          </form>

          {/* Footer Social */}
          <div className="flex items-end justify-between mt-6 text-lg">
            <span>@williamrey</span>
            <div className="flex items-center gap-4 text-white text-2xl">
              <i className="fa-brands fa-facebook-f" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-x-twitter" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
