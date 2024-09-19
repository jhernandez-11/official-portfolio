import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Home.css";

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
        className="mySwiper text-left text-5xl font-mono font-bold text-black md:text-5xl lg:text-7xl"
        // Key prop ensures Swiper re-renders when window size changes
        key={windowSize.width}
      >
        <SwiperSlide className="sliderr">
          <Link to="/about" className="w-full h-full">
            <div>About Me</div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="sliderr">
          <Link to="/about" className="w-full h-full">
            <div>UX Design</div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="sliderr">
          <Link to="/about" className="w-full h-full">
            <div>UX Research</div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="sliderr">
          <Link to="/contact" className="w-full h-full">
            <div>Contact</div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="sliderr">
          <Link to="/resume" className="w-full h-full">
            <div>Resume</div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="sliderr">
          <Link to="/about" className="w-full h-full">
            <div>
              Access-
              <br />
              ibility
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}