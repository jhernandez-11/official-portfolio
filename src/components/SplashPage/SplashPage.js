import React from "react";
import AnimatedSVG from "../SvgAni/Svg";
import ScrollToBottom from "../Scroll";

import "./SplashPage.css";

function SplashPage() {
  return (
    <div className="w-full h-screen flex flex-col place-content-around items-center text-left">
      <div className="flex flex-col items-center">
        <AnimatedSVG />
        <p className="intro-text lg:w-4/6 px-6 text-xl lg:text-xl lg:leading-loose font-mono pt-9 leading-relaxed">
          Hi, my name is Jose. <br />
          An aspiring UX Designer with a unique, abstract perspective on the
          world.
        </p>
      </div>
      <div className="px-6 w-min sm:w-fit text-5xl md:text-6xl font-extrabold">
        <p className="heading-text bg-clip-text text-transparent bg-gradient-to-r from-black to-red-500 py-3">
          Think. Design. Refine
        </p>
      </div>
      <ScrollToBottom />
    </div>
  );
}

export default SplashPage;
