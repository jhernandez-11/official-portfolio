import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-cont w-full flex flex-col sm:flex-row items-center place-items-start">
      <div className="grid w-full sm:w-60 sm:place-content-center text-5xl mb-6 sm:text-7xl font-bold font-sans uppercase">
        <p className="about-text sm:rotate-[-90deg] w-max">About Me</p>
      </div>
      <p className="font-mono text-lg md:pr-6">
        Hi there! I'm Jose, a passionate front-end developer and UX designer
        based in the San Francisco Bay Area, with a love for creating seamless,
        user-friendly, and accessible digital experiences. I graduated from
        Ohlone College with a degree in Multimedia and earned a{" "}
        <b>
          Certificate of Achievement Front-End Development / User Experience
          Design
        </b>
        , which solidified my foundation in design and development. I also
        completed the <b>Google UX Design Professional Certificate</b>, where I
        honed my skills in crafting user-centered, inclusive, and
        accessibility-focused design solutions.
        <br /> <br />
        Whether designing intuitive user interfaces, writing clean, responsive
        code, or ensuring that every interaction is <b>accessible</b> to all
        users, I strive to make every project a joy to use. I believe that great
        design is not just about how things look, but how they work for
        everyone, regardless of ability. My goal is to bridge the gap between
        users and technology with thoughtful, innovative, and inclusive
        solutions.
        <br /> <br />
        When I’m not immersed in the latest design trends or coding challenges,
        you’ll find me in the kitchen, perfecting my baking skills and whipping
        up delicious treats.
        <br /> <br />
        Let’s connect and create something amazing together!
      </p>
    </div>
  );
};

export default About;
