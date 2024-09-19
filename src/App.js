import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css"; // Import the CSS transitions
// Components
import SplashPage from "./components/SplashPage/SplashPage";
import CustomCursor from "./components/Cursor/CustomCursor";
import SocialIcons from "./components/Social-Icons/SocialIcons";
import HomeButton from "./components/Home-Button/HomeButton";
// Pages
import Home from "./pages/Home-Page/Home";
import About from "./pages/About-Me/About";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";

const App = () => {
  const location = useLocation(); // Get current route location

  return (
    <>
      <main className="border-solid border-t-red-500 border-b-comp-blue border-y-8">
        <SplashPage />

        {/* Wrap Routes with TransitionGroup */}
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname} // Change the key when the route changes
            classNames="page" // Use the class names from the CSS
            timeout={300} // Set the duration for the transition (matches the CSS)
            unmountOnExit // Unmount the page after the exit transition
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>

      <CustomCursor />
      <SocialIcons />
      {location.pathname !== "/" && <HomeButton />}
    </>
  );
};

export default App;
