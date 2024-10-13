import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Research.css";

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
      <div className="h-max grid align-middle justify-items-center">
        <div className="w-11/12 lg:w-3/5 pb-3 border-solid border-b-4 mb-6">
          <div>
            <h1 className="font-mono text-3xl">Project - Elysian Gallery</h1>
            <p className="italic mt-3">
              {" "}
              Google UX Design Professional Certificate
            </p>
          </div>
          <p className="w-full pt-3 font-mono">
            Challenge: Build a budget-friendly art marketplace app that connects
            artists and buyers, offering a seamless platform for discovering,
            showcasing, and purchasing unique artworks at accessible prices.
          </p>
        </div>
        <div className="w-11/12 lg:w-3/5 mb-6 leading-loose">
          <p>
            <span className=" font-bold text-2xl">Personas</span> - User
            personas helped me understand the needs and goals of the target
            audience, guiding my design decisions to ensure the final product
            was user-centered and accessible. By focusing on specific user
            types, I was able to create more tailored, meaningful experiences
            that addressed real user pain points and enhanced overall usability.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          grid={{
            rows: 1,
          }}
          spaceBetween={15}
          style={{
            "--swiper-pagination-color": "#44efef",
            "--swiper-navigation-color": "#44efef",
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            1020: {
              slidesPerView: 1.2,
            },
          }}
          modules={[Grid, Pagination, Navigation]}
          className="mySwiper r-swiper"
        >
          <SwiperSlide className="r-sliderr">
            <img
              className="h-full"
              src={`${process.env.PUBLIC_URL}/persona/emily.jpg`}
              alt="emily persona"
            />
          </SwiperSlide>
          <SwiperSlide className="r-sliderr">
            <img
              className="h-full"
              src={`${process.env.PUBLIC_URL}/persona/robert.jpg`}
              alt="robert persona"
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-11/12 lg:w-3/5 mb-6 leading-loose">
          <p>
            <span className="font-bold text-2xl">User Story</span> - User
            stories helped define specific user needs and tasks, allowing me to
            prioritize features based on real user goals. This approach ensured
            that each design decision focused on creating a seamless and
            intuitive experience, addressing both user pain points and
            expectations effectively.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          grid={{
            rows: 1,
          }}
          spaceBetween={15}
          style={{
            "--swiper-pagination-color": "#44efef",
            "--swiper-navigation-color": "#44efef",
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            1020: {
              slidesPerView: 1.2,
            },
          }}
          modules={[Grid, Pagination, Navigation]}
          className="mySwiper r-swiper"
        >
          <SwiperSlide className="r-sliderr">
            <img
              className="h-full"
              src={`${process.env.PUBLIC_URL}/user-story/emily.png`}
              alt="emily story"
            />
          </SwiperSlide>
          <SwiperSlide className="r-sliderr">
            <img
              className="h-full"
              src={`${process.env.PUBLIC_URL}/user-story/robert.png`}
              alt="robert story"
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-11/12 lg:w-3/5 mb-6 leading-loose">
          <p>
            <span className=" font-bold text-2xl">Journey Map</span> - Journey
            Maps were used to visually chart the user's interactions with the
            app, from initial discovery to final purchase, highlighting key
            moments and emotions. This allowed us to pinpoint friction points
            and opportunities for improvement, ensuring a smoother, more
            intuitive user experience across all touchpoints.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          grid={{
            rows: 1,
          }}
          spaceBetween={15}
          style={{
            "--swiper-pagination-color": "#44efef",
            "--swiper-navigation-color": "#44efef",
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            1020: {
              slidesPerView: 1.2,
            },
          }}
          modules={[Grid, Pagination, Navigation]}
          className="mySwiper r-swiper"
        >
          <SwiperSlide className="r-sliderr">
            <img
              className="h-full"
              src={`${process.env.PUBLIC_URL}/journey-map/emily.jpg`}
              alt="emily journey"
            />
          </SwiperSlide>
          <SwiperSlide className="r-sliderr">
            <img
              className="h-full"
              src={`${process.env.PUBLIC_URL}/journey-map/robert.jpg`}
              alt="robert journey"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
