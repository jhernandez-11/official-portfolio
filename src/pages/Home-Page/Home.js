import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Home.css";

// Icons
import { ReactComponent as AboutSVG } from "./about.svg";
import { ReactComponent as ProjectsSVG } from "./projects.svg";
import { ReactComponent as ContactSVG } from "./contact.svg";
import { ReactComponent as AccessibilitySVG } from "./accessibility.svg";
import { ReactComponent as ResumeSVG } from "./resume.svg";


// Import required modules
import { Grid, Pagination, Navigation } from "swiper/modules";

export default function App() {
  // State to trigger re-render on window resize
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      // Update window size in state, triggering a re-render
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={15}
        style={{
          "--swiper-pagination-color": "#EF4444",
          "--swiper-navigation-color": "#EF4444",
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          1030: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 1,
          },
          300: {
            slidesPerView: 1,
            grid: 1,
          },
        }}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper text-left text-3xl font-mono font-bold text-black md:text-3xl lg:text-4xl"
        // Key prop ensures Swiper re-renders when window size changes
        key={windowSize.width}
      >
        <SwiperSlide className="sliderr">
          <Link to="/projects" className="w-full h-full">
            <div className="grid grid-flow-col">
              <ProjectsSVG width="45" height="45" fill="black" />
              <p className="ml-3">Projects</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="sliderr">
          <Link to="/about" className="w-full h-full">
            <div className="grid grid-flow-col">
              <AboutSVG width="45" height="45" fill="black" />
              <p className="ml-3">About Me</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="sliderr">
          <Link to="/contact" className="w-full h-full">
            <div className="grid grid-flow-col">
              <ContactSVG width="45" height="45" fill="black" />
              <p className="ml-3">Contact</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="sliderr">
          <Link to="/resume" className="w-full h-full">
            <div className="grid grid-flow-col">
              <ResumeSVG width="45" height="45" fill="black" />
              <p className="ml-3">Resume</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="sliderr">
          <Link to="/a11y" className="w-full h-full">
            <div className="grid grid-flow-col">
              <AccessibilitySVG width="45" height="45" fill="black" />
              <p className="ml-3">A11Y</p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}