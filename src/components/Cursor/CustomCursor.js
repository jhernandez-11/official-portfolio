import React, { useEffect } from "react";
import "./CustomCursor.css"; // Import the styles for the cursor

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorInner = document.querySelector(".cursor2");
    const links = document.querySelectorAll("a");

    let mouseX = 0,
      mouseY = 0; // Mouse position
    let cursorX = 0,
      cursorY = 0; // Cursor actual position for smooth movement

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursor = () => {
      // Smooth the outer circle movement by interpolating between current and target positions
      cursorX += (mouseX - cursorX) * 0.1; // Adjust this factor for more or less smoothness
      cursorY += (mouseY - cursorY) * 0.1;

      // Apply the transformation to both the cursors
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      cursorInner.style.left = `${mouseX}px`;
      cursorInner.style.top = `${mouseY}px`;

      requestAnimationFrame(updateCursor); // Keep the animation going
    };

    // Only set event listeners if it's not a touch device
    const isTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };

    if (isTouchDevice()) {
      cursor.style.display = "none";
      cursorInner.style.display = "none";
    } else {
      // Event listeners for mouse movement (non-touch devices)
      document.addEventListener("mousemove", moveCursor);

      // Start the animation loop
      requestAnimationFrame(updateCursor);

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

      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);

      links.forEach((link) => {
        link.addEventListener("mouseover", addHoverEffect);
        link.addEventListener("mouseleave", removeHoverEffect);
      });

      // Cleanup event listeners on component unmount
      return () => {
        document.removeEventListener("mousemove", moveCursor);
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
        links.forEach((link) => {
          link.removeEventListener("mouseover", addHoverEffect);
          link.removeEventListener("mouseleave", removeHoverEffect);
        });
      };
    }
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </>
  );
};

export default CustomCursor;
