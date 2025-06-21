import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-6 py-16 text-sm rounded-t-4xl md:mx-7 space-y-10" >
      <div className="flex flex-col md:flex-row items-start justify-between md:items-center gap-4">
          <span className="text-lime-400 w-full md:w-1/3 font-bold text-4xl md:text-6xl">
            DEVELOP.ME
          </span>
          <span className="text-6xl md:text-9xl leading-none">AS YOU CAN</span>
        </div>
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Heading */}
        

        {/* Content Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-center align-middle">
          <div></div>
          {/* Say Hello */}
          <div>
            <h3 className="uppercase mb-2 font-semibold">Say hello</h3>
            <p>HELLO@DEVELOP.ME.COM</p>
            <p>MAHBUBL@ME.COM</p>

            <h3 className="uppercase mt-4 mb-2 font-semibold">Call</h3>
            <p>+78549 4965 00</p>
            <p>+9854 0100 211</p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="uppercase mb-2 font-semibold">Menu</h3>
            <ul className="space-y-1">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PORTFOLIO</li>
              <li>BLOG</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="uppercase mb-2 font-semibold">Social</h3>
            <ul className="space-y-1">
              <li>TWITTER</li>
              <li>INSTAGRAM</li>
              <li>FACEBOOK</li>
              <li>DRIBBBLE</li>
            </ul>
          </div>

          {/* Empty space for alignment or future content */}
          {/* <div className="hidden md:block" /> */}
        </div>

        {/* Bottom Bar */}
        
      </div>
      <div className="mt-10 flex flex-col sm:flex-row justify-between items-center text-xs border-t border-gray-700 pt-6 gap-2">
          <span>© develop.me 2022</span>
          <span className="text-gray-400">PRIVACY – TERMS</span>
        </div>
    </footer>
  );
};

export default Footer;
