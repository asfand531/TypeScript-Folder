import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarwithToggler from "./components/NavbarwithToggler";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import "./App.css";

type Theme = string;

function App() {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <>
      <Router>
        <NavbarwithToggler theme={theme} setTheme={setTheme} />
        <div className="mainContainer">
          <Routes>
            <Route path="/" element={<HeroSection theme={theme} />} />
            <Route path="/about" element={<About theme={theme} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
