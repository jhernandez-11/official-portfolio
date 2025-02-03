import React from "react";
import { Link } from "react-router-dom";

import "./BackButton.css";

const Back = () => {
  return (
    <div className="icon-back hover:animate-bounce bg-black mix-blend-difference text-white">
      <Link to="/projects" className="w-full h-full">
        <ion-icon size="large" name="arrow-back-circle-outline"></ion-icon>
      </Link>
    </div>
  );
};

export default Back;
