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
            Challenge: Build a budget-friendly art marketplace app that connects
            artists and buyers, offering a seamless platform for discovering,
            showcasing, and purchasing unique artworks at accessible prices.
          </p>
        </div>
        <div className="w-11/12 lg:w-3/5 mb-6 leading-loose">
          <p>
            <span className="font-bold text-2xl">Personas</span> -We used
            Journey Maps to visually trace how users interact with the app, from
            the moment they first discover it to making a purchase. These maps
            highlighted key moments and emotions, helping us spot any bumps in
            the road and identify opportunities for improvement. This approach
            allowed us to ensure a smoother, more intuitive user experience
            across all touchpoints, making every interaction with the app a
            delightful one.
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
            <span className=" font-bold text-2xl">Journey Map</span> - We
            crafted a Journey Map for Emily Rodriguez to trace her interactions
            with our online auction platform, from the initial discovery of
            contemporary art pieces to making a final purchase. By highlighting
            key moments and emotions, we could see her journey through four main
            actions: discovering new art, researching artists, placing a bid,
            and finalizing the transaction. This approach allowed us to spot any
            friction points and uncover opportunities for improvement, ensuring
            a smoother and more intuitive user experience at every touchpoint.
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
            <span className="font-bold text-2xl">Paper wireframes</span> - We
            started with Paper Wireframes to sketch out the basic structure and
            layout of the app. These hand-drawn sketches allowed us to quickly
            brainstorm and iterate on different design ideas. By visually
            mapping out each screen and user flow, we could easily identify the
            best layout and interactions for a smooth user experience. This
            initial step helped us to lay a solid foundation before moving on to
            digital prototypes, ensuring that we captured the core functionality
            and design elements early in the process.
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
