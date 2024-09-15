import React, { useEffect } from "react";
import "./CustomCursor.css"; // Import the styles for the cursor

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorInner = document.querySelector(".cursor2");
    const links = document.querySelectorAll("a");

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const moveInnerCursor = (e) => {
      cursorInner.style.left = `${e.clientX}px`;
      cursorInner.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      cursor.classList.add("click");
      cursorInner.classList.add("cursorinnerhover");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("click");
      cursorInner.classList.remove("cursorinnerhover");
    };

    const addHoverEffect = () => {
      cursor.classList.add("hover");
    };

    const removeHoverEffect = () => {
      cursor.classList.remove("hover");
    };

    // Event listeners
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousemove", moveInnerCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    links.forEach((link) => {
      link.addEventListener("mouseover", addHoverEffect);
      link.addEventListener("mouseleave", removeHoverEffect);
    });

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousemove", moveInnerCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      links.forEach((link) => {
        link.removeEventListener("mouseover", addHoverEffect);
        link.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </>
  );
};

export default CustomCursor;