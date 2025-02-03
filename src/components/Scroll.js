import React, { useRef } from "react";

const ScrollToBottom = () => {
  const buttonRef = useRef(null);

  const scrollToBelowButton = () => {
    // Get the button's position on the page
    const buttonPosition = buttonRef.current.getBoundingClientRect().top + window.scrollY;

    const offset = window.innerWidth * 0.05;

    // Scroll to just below the button
    window.scrollTo({
      top: buttonPosition + offset, // Scrolls to the position below the button
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <button ref={buttonRef} onClick={scrollToBelowButton}>
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        class="animate-bounce"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  );
};

export default ScrollToBottom;