import React, { useEffect } from "react";
import anime from "animejs";
import { Link } from "react-router-dom";

const SvgDrawingEffect = () => {
  useEffect(() => {
    anime({
      targets: ".letter-path",
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 6000,
      easing: "easeInOutSine",
      strokeDasharray: "1000",
      loop: false,
      direction: "normal",
    });
  }, []);

  return (
    <Link to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100"
        zoomAndPan="magnify"
        viewBox="70 70 200 200"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <g />
        </defs>
        <g fill="none" stroke="#ef4444" strokeWidth="6">
          <g transform="translate(107.484372, 227.249985)">
            <g>
              <path
                className="letter-path"
                d="M 35.28125 -129.59375 L 35.28125 -110.875 L 14.765625 -110.875 L 14.765625 -129.59375 Z M 33.296875 -90.359375 L 33.296875 9.1875 C 33.296875 18.664062 31.34375 25.410156 27.4375 29.421875 C 23.539062 33.441406 17.816406 35.453125 10.265625 35.453125 C 9.179688 35.453125 8.21875 35.421875 7.375 35.359375 C 6.539062 35.304688 4.019531 35.097656 -0.1875 34.734375 L -0.1875 22.6875 L 3.59375 22.6875 C 8.875 22.6875 12.320312 21.515625 13.9375 19.171875 C 15.5625 16.828125 16.375 12.894531 16.375 7.375 L 16.375 -90.359375 Z M 33.296875 -90.359375"
                strokeDasharray="1000"
              />
            </g>
          </g>
          <g transform="translate(157.524369, 227.249985)">
            <g>
              <path
                className="letter-path"
                d="M 32.9375 -129.78125 L 32.9375 -77.046875 C 35.820312 -81.835938 39.8125 -85.523438 44.90625 -88.109375 C 50.007812 -90.691406 55.800781 -91.984375 62.28125 -91.984375 C 71.15625 -91.984375 78.625 -89.671875 84.6875 -85.046875 C 90.75 -80.429688 93.78125 -71.941406 93.78125 -59.578125 L 93.78125 0 L 76.5 0 L 76.5 -54.71875 C 76.5 -63.363281 74.878906 -69.570312 71.640625 -73.34375 C 68.398438 -77.125 63.539062 -79.015625 57.0625 -79.015625 C 50.9375 -79.015625 45.382812 -76.972656 40.40625 -72.890625 C 35.425781 -68.816406 32.9375 -61.378906 32.9375 -50.578125 L 32.9375 0 L 15.84375 0 L 15.84375 -129.78125 Z M 32.9375 -129.78125"
                strokeDasharray="1000"
              />
            </g>
          </g>
        </g>
      </svg>
    </Link>
  );
};

export default SvgDrawingEffect;
