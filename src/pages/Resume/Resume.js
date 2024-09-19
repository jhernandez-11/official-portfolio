import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-cont w-full flex flex-col md:flex-row items-center place-items-start">
      {/* Title Section */}
      <div className="grid w-full md:w-60 sm:place-content-center text-5xl mb-6 sm:text-7xl font-bold font-sans uppercase">
        <p className="resume-text md:rotate-[-90deg] w-max">Resume</p>
      </div>

      <div className="flex place-content-center items-center w-full sm:w-4/5 h-screen">
        <iframe
          src="/resume.pdf"
          className="w-11/12 sm:w-4/5 border-none"
          title="Resume PDF"
        />
      </div>
    </div>
  );
};

export default Resume;
