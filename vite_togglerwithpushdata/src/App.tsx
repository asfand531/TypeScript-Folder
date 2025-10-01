import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarwithToggler from "./components/NavbarwithToggler";
import HeroSection from "./components/HeroSection";
import About from "./components/About";

type Theme = string;

function App() {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <>
      <Router>
        <NavbarwithToggler theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<HeroSection theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
