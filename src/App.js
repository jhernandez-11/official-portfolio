import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css"; // Import the CSS transitions
// Components
import SplashPage from "./components/SplashPage/SplashPage";
import CustomCursor from "./components/Cursor/CustomCursor";
import SocialIcons from "./components/Social-Icons/SocialIcons";
import HomeButton from "./components/Home-Button/HomeButton";
import BackButton from "./components/Back-Button/BackButton";
// Pages
import Home from "./pages/Home-Page/Home";
import About from "./pages/About-Me/About";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import A11y from "./pages/A11y/A11y";
import Projects from "./pages/Projects/Projects";
import Elysian from "./pages/Projects/Elysian/Elysian";
import PocketX from "./pages/Projects/PocketX/PocketX";

const App = () => {
  const location = useLocation(); // Get current route location

  return (
    <>
      <main className="border-solid border-t-red-500 border-b-red-500 border-y-8">
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
              <Route path="/a11y" element={<A11y />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/elysian" element={<Elysian />} />
              <Route path="/pocketX" element={<PocketX />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>

      <CustomCursor />
      <SocialIcons />
      {location.pathname !== "/" &&
        location.pathname !== "/elysian" &&
        location.pathname !== "/pocketX" && <HomeButton />}
      {(location.pathname === "/elysian" ||
        location.pathname === "/pocketX") && <BackButton />}
    </>
  );
};

export default App;
