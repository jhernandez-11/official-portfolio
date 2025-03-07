import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollToTop from "../../../components/ScrollTop";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./JeepneyMaps.css";

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
  });

  return (
    <>
      <ScrollToTop />
      <div className="h-max grid align-middle justify-items-center">
        <div className="w-11/12 lg:w-3/5 pb-3 border-solid border-b-4 mb-6">
          <div>
            <h1 className="font-mono text-3xl">Project - Elysian</h1>
            <p className="italic mt-3">
              {" "}
              Google UX Design Professional Certificate
            </p>
          </div>
          <p className="w-full pt-3 font-mono">
            Challenge: Build Jeepney Maps, a user-friendly app designed to
            provide real-time jeepney tracking in Legazpi City, Philippines. The
            app aims to help commuters easily locate nearby jeepneys, view live
            routes, and plan their trips efficiently, reducing waiting times and
            improving daily travel experiences in an accessible and reliable
            way.
          </p>
        </div>
        <div className="w-11/12 lg:w-3/5 mb-6 leading-loose">
          <p>
            <span className=" font-bold text-2xl">Personas</span> - We created
            detailed Personas to represent different types of users interacting
            with the app. For example, Maria Santos, a 28-year-old office
            worker, is always in a rush to get to work on time. By understanding
            Maria's characteristics, needs, and goals, we could empathize with
            our users and tailor the app to provide a more personalized and
            enjoyable experience for each user type. This approach allowed us to
            identify opportunities for improvement and ensure a smoother
            experience.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          grid={{
            rows: 1,
          }}
          spaceBetween={15}
          style={{
            "--swiper-pagination-color": "black",
            "--swiper-navigation-color": "black",
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
              src={`${process.env.PUBLIC_URL}/persona/maria.png`}
              alt="emily persona"
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-11/12 lg:w-3/5 mb-6 leading-loose">
          <p>
            <span className=" font-bold text-2xl">Journey Map</span> - We used
            Journey Maps to visually trace how users like Maria interact with
            the app, from the moment they first discover it to making a
            purchase. These maps highlighted key moments and emotions along the
            way. For instance, Maria's journey included preparing for her
            commute, walking to the jeepney stop, waiting for a jeepney, riding
            the jeepney, and finally arriving at work. This helped us spot any
            friction points and find opportunities to make the experience
            smoother and more intuitive for everyone, ensuring every interaction
            with the app is delightful.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          grid={{
            rows: 1,
          }}
          spaceBetween={15}
          style={{
            "--swiper-pagination-color": "black",
            "--swiper-navigation-color": "black",
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
              src={`${process.env.PUBLIC_URL}/journey-map/maria.png`}
              alt="emily journey"
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-11/12 lg:w-3/5 mb-6 leading-loose">
          <p>
            <span className=" font-bold text-2xl">Site map</span> - The Sitemap
            for our app provides a clear and organized overview of all the key
            sections and pages, helping users navigate seamlessly. It visually
            lays out the structure of the app, starting from the home page and
            branching out to different categories like user profiles, product
            listings, and the checkout process. This visual guide ensures that
            every aspect of the app is easily accessible, enhancing the overall
            user experience and making sure users can find what they need
            quickly and efficiently.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          grid={{
            rows: 1,
          }}
          spaceBetween={15}
          style={{
            "--swiper-pagination-color": "black",
            "--swiper-navigation-color": "black",
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
              src={`${process.env.PUBLIC_URL}/jeep-sitemap.png`}
              alt="information architecture"
            />
          </SwiperSlide>
          <SwiperSlide className="r-sliderr">
            <img
              className="h-full"
              src={`${process.env.PUBLIC_URL}/jeep-sitemap-2.png`}
              alt="robert persona"
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-11/12 lg:w-3/5 mb-6 leading-loose">
          <p>
            <span className=" font-bold text-2xl">Low fidelity (lo-fi)</span> -
            We created Low-Fidelity Wireframes to outline the basic structure
            and flow of the app without getting caught up in the details. These
            simple, grayscale sketches allowed us to focus on the overall user
            experience and layout. By quickly iterating on these wireframes, we
            could make rapid adjustments based on feedback, ensuring that the
            core functionality and navigation were spot-on before moving on to
            more detailed designs. This approach helped us streamline the design
            process and create a solid foundation for the app.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          grid={{
            rows: 1,
          }}
          spaceBetween={15}
          style={{
            "--swiper-pagination-color": "black",
            "--swiper-navigation-color": "black",
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
              src={`${process.env.PUBLIC_URL}/low1.png`}
              alt="emily journey"
            />
          </SwiperSlide>
          <SwiperSlide className="r-sliderr">
            <img
              className="h-full"
              src={`${process.env.PUBLIC_URL}/low2.png`}
              alt="robert journey"
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-11/12 lg:w-3/5 mb-6 leading-loose">
          <p>
            <span className=" font-bold text-2xl">High fidelity (hi-fi)</span> -
            We designed High-Fidelity Wireframes to bring our app to life with
            detailed visuals and interactive elements. These polished wireframes
            included precise layouts, colors, typography, and user interface
            components, closely resembling the final product. By simulating the
            real user experience, we could thoroughly test and refine the
            design, ensuring everything looked and functioned perfectly. This
            step helped us bridge the gap between conceptual ideas and the final
            app, making sure we delivered a seamless and visually appealing user
            experience.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          grid={{
            rows: 1,
          }}
          spaceBetween={15}
          style={{
            "--swiper-pagination-color": "black",
            "--swiper-navigation-color": "black",
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
              src={`${process.env.PUBLIC_URL}/hifi-1.png`}
              alt="emily journey"
            />
          </SwiperSlide>
          <SwiperSlide className="r-sliderr">
            <img
              className="h-full"
              src={`${process.env.PUBLIC_URL}/hifi-2.png`}
              alt="robert journey"
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-11/12 lg:w-3/5 mb-6 leading-loose">
          <p className="font-bold text-2xl">Prototype</p>
          <iframe
            id="elysian-hifi"
            title="elysian prototype"
            width="800"
            height="450"
            src="https://embed.figma.com/proto/cAKa1ccuml8vOxJJW02d9m/Hi-fi-Prototypes?page-id=311%3A815&node-id=311-816&node-type=frame&viewport=462%2C321%2C0.59&scaling=scale-down&content-scaling=fixed&starting-point-node-id=330%3A974&show-proto-sidebar=1&embed-host=share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
