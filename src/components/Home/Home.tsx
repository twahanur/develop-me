// components/HeroSection.jsx
import { Phone } from "lucide-react";
import ButtonWithIcon from "../commom/buttonWithIcon";
import Navbar from "../navbar/nav";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#d0fff4] via-white to-[#d5ff00]">
        <Navbar />
      <div className="min-h-screen font-grotesk   text-black px-6 lg:px-20 py-10 relative overflow-hidden flex pt-5 md:pt-24">
        <div className="">
          <h2 className="text-5xl sm:text-6xl lg:text-9xl font-bold space-y-5 mb-10">
            <div>
              Trusted{" "}
              <span className="bg-black text-white px-3 pb-3 rounded-2xl inline-block">
                Partner
              </span>{" "}
              for
            </div>
            <div>
              Your Website{" "}
              <span className="bg-black text-white px-3 pb-6 rounded-2xl inline-block">
                Develop.
              </span>
            </div>
          </h2>

          <div className="flex">
            <div className=" left-4 top-1/3 flex items-center gap-6 w-1/4">
              <span className="rotate-270 text-sm">@williamrey</span>
              <div className="flex flex-col gap-4 items-center  text-3xl">
                <a href="#">
                  <i className="fa-brands fa-x-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook" />
                </a>
                <div className="w-px h-8 bg-black"></div>
              </div>
            </div>
            <div>
              <p className="mt-6 text-3xl font-medium text-gray-800">
                Building the world’s best marketing websites for over a decade.{" "}
                <br />
                Your trusted partner for strategy, design, and dev.
              </p>

              <div className="mt-10">
                <ButtonWithIcon
                  className="text-3xl py-4"
                  text={"Schedule a Call"}
                >
                  <Phone
                    size={20}
                    className="mr-2 border-1 font-extrabold rounded-full w-16 h-16 p-3"
                  />
                </ButtonWithIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
