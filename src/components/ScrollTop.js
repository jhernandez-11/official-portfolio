import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const viewportHeight = window.innerHeight;
  const height = viewportHeight; // Subtract 100 pixels

  useEffect(() => {
    window.scrollTo({
      top: height,
      behavior: "smooth",
    });
  });
};

export default ScrollToTop;