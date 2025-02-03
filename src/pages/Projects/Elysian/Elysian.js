import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollToTop from "../../../components/ScrollTop";


// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Elysian.css";

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
              src={`${process.env.PUBLIC_URL}/persona/emily.png`}
              alt="emily persona"
            />
          </SwiperSlide>
          <SwiperSlide className="r-sliderr">
            <img
              className="h-full"
              src={`${process.env.PUBLIC_URL}/persona/robert.png`}
              alt="robert persona"
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
              src={`${process.env.PUBLIC_URL}/journey-map/emily.png`}
              alt="emily journey"
            />
          </SwiperSlide>
          <SwiperSlide className="r-sliderr">
            <img
              className="h-full"
              src={`${process.env.PUBLIC_URL}/journey-map/robert.png`}
              alt="robert journey"
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-11/12 lg:w-3/5 mb-6 leading-loose">
          <p>
            <span className=" font-bold text-2xl">Site map</span> - In my
            project, the sitemap and information architecture were key to
            organizing the app’s structure and ensuring users can easily
            navigate between sections. By clearly defining how content is
            grouped and linked, I was able to create intuitive pathways for both
            artists and buyers, making it easier for them to find what they
            need. This approach streamlined the user experience, reducing
            confusion and improving overall usability.
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
              src={`${process.env.PUBLIC_URL}/sitemap.png`}
              alt="information architecture"
            />
          </SwiperSlide>
          <SwiperSlide className="r-sliderr">
            <img
              className="h-full"
              src={`${process.env.PUBLIC_URL}/sitemap-2.png`}
              alt="robert persona"
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-11/12 lg:w-3/5 mb-6 leading-loose">
          <p>
            <span className="font-bold text-2xl">Paper wireframes</span> - In my
            project, paper wireframes played a crucial role in shaping the
            initial layout and structure of the app. They allowed me to quickly
            sketch and experiment with different ideas for the user interface,
            helping me visualize how key elements like navigation, galleries,
            and product listings would be placed. These wireframes provided a
            solid foundation to test and gather feedback before moving into
            higher-fidelity designs, saving time and guiding the design process
            efficiently.
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
              src={`${process.env.PUBLIC_URL}/e-paper-wireframes.png`}
              alt="emily story"
            />
          </SwiperSlide>
          <SwiperSlide className="r-sliderr">
            <img
              className="h-full"
              src={`${process.env.PUBLIC_URL}/paper-wireframe.png`}
              alt="robert story"
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-11/12 lg:w-3/5 mb-6 leading-loose">
          <p>
            <span className=" font-bold text-2xl">Low fidelity (lo-fi)</span> -
            In my project, lo-fi wireframes were essential for translating the
            initial sketches into a more refined, digital layout. They helped me
            focus on the core structure and functionality of the app without
            getting distracted by visual details, allowing me to test user flows
            and interactions early on. By using lo-fi wireframes, I was able to
            gather valuable feedback on the app’s usability and make necessary
            adjustments before moving on to high-fidelity designs.
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
              src={`${process.env.PUBLIC_URL}/lo-fi-wireframes-1.png`}
              alt="emily journey"
            />
          </SwiperSlide>
          <SwiperSlide className="r-sliderr">
            <img
              className="h-full"
              src={`${process.env.PUBLIC_URL}/lo-fi-wireframes-2.png`}
              alt="robert journey"
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-11/12 lg:w-3/5 mb-6 leading-loose">
          <p>
            <span className=" font-bold text-2xl">High fidelity (hi-fi)</span> -
            In my project, high-fidelity wireframes were crucial for bringing
            the app’s design to life. They allowed me to refine the layout,
            incorporate detailed visual elements, and establish a cohesive
            design system, including typography, colors, and icons. By using
            hi-fi wireframes, I was able to create a realistic representation of
            the final product, which helped stakeholders visualize the app’s
            look and feel. This stage also enabled me to conduct more advanced
            usability testing, ensuring that both the aesthetics and
            functionality aligned with user expectations before moving into
            development.
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
              src={`${process.env.PUBLIC_URL}/hi-fi-1.png`}
              alt="emily journey"
            />
          </SwiperSlide>
          <SwiperSlide className="r-sliderr">
            <img
              className="h-full"
              src={`${process.env.PUBLIC_URL}/hi-fi-2.png`}
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
            src="https://embed.figma.com/proto/cAKa1ccuml8vOxJJW02d9m/Hi-fi-Prototypes?page-id=0%3A1&node-id=1-3&viewport=211%2C272%2C0.58&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3&embed-host=share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}