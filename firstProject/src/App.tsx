import MainContent from "./components/MainContent";
import Intermediate from "./components/Intermediate";
import "./App.css";
import Shapes from "./components/Shapes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <MainContent />
        <Intermediate />
        <Shapes />
      </div>
    </>
  );
}

export default App;
