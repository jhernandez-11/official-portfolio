import React from "react";
import SplashPage from "./components/SplashPage/SplashPage";
import CustomCursor from "./components/Cursor/CustomCursor";
import SocialIcons from "./components/Social-Icons/SocialIcons";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home-Page/Home";
import About from "./pages/About-Me/About";
import HomeButton from "./components/Home-Button/HomeButton";

const App = () => {
  const location = useLocation()
  return (
    <>
      <main className="border-solid border-t-red-500 border-b-comp-blue border-y-8">
        <SplashPage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <CustomCursor />
      <SocialIcons />
      {location.pathname !== "/" && <HomeButton />}
    </>
  );
};

export default App;
