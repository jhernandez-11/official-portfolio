import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="h-max w-full sm:h-screen grid sm:grid-flow-col items-center justify-items-center">
      <div className="text-center flex flex-col items-center">
        <Link to="/elysian" className="w-full h-full place-items-center">
          <p className="text-2xl">Elysian</p>
          <img
            className="project w-5/6 sm:w-full"
            src={`${process.env.PUBLIC_URL}/1.png`}
            alt="user-centered design"
          />
        </Link>
        <div className="mb-6">
          <a
            href="/elysian-case-study.pdf"
            download="elysian-case-study.pdf"
            className="underline text-red-500 p-3"
          >
            Download Case Study
          </a>
        </div>
      </div>
      <div className="text-center flex flex-col items-center">
        <Link to="/pocketX" className="w-full h-full place-items-center">
          <p className="text-2xl">PocketX</p>
          <img
            className="project w-5/6 sm:w-full"
            src={`${process.env.PUBLIC_URL}/2.png`}
            alt="user-centered design"
          />
        </Link>
        <div className="mb-6">
          <a
            href="/pocketx-case-study.pdf"
            download="pocketx-case-study.pdf"
            className="underline text-red-500 p-3"
          >
            Download Case Study
          </a>
        </div>
      </div>
      <div className="text-center flex flex-col items-center">
        <Link to="/jeepneyMaps" className="w-full h-full place-items-center">
          <p className="text-2xl">Jeepney Maps</p>
          <img
            className="project w-5/6 sm:w-full"
            src={`${process.env.PUBLIC_URL}/3.png`}
            alt="user-centered design"
          />
        </Link>
        <div className="mb-6">
          <a
            href="/jeepney-maps-case-study.pdf"
            download="jeepney-maps-case-study.pdf"
            className="underline text-red-500 p-3"
          >
            Download Case Study
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
