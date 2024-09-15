import React from "react";
import { Link } from "react-router-dom";

import "./HomeButton.css";

const Home = () => {
  return (
    <div className="icon-home hover:animate-bounce bg-black mix-blend-difference text-white">
      <Link to="/" className="w-full h-full">
        <ion-icon size="large" name="home-outline"></ion-icon>
      </Link>
    </div>
  );
};

export default Home;
