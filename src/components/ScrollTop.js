import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const viewportHeight = window.innerHeight;
  const height = viewportHeight; // Subtract 100 pixels

  useEffect(() => {
    window.scrollTo({
      top: height, // Scroll to the top of the page
      behavior: "smooth", // Optional: Add smooth scrolling
    });
  }, [pathname]); // Run only when `pathname` changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;