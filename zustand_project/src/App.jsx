import counterStore, { /*themeToggle,*/ useThemeStore } from "./store/store";
import tooltip from "./images/tooltip.svg";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const { count, increase, decrease, reset } = counterStore();
  // const { theme, dark, light, toggle } = themeToggle();
  const { theme, dark, light, toggle } = useThemeStore();

  return (
    <>
      <div
        className="container"
        style={{
          background: theme === "dark" ? "#242424" : "white",
          color: theme === "dark" ? "white" : "#242424",
        }}
      >
        <button onClick={increase} title="Increase Count">
          Increase
        </button>
        <div className="text">
          <h1 onClick={reset} title="Count">
            Count: {count}
          </h1>
          <img
            src={tooltip}
            alt="tooltip"
            className="tooltip"
            title="Click on the count to reset."
          />
        </div>
        <button onClick={decrease} title="Decrease Count">
          Decrease
        </button>
      </div>
      <button onClick={toggle}>Toggle Theme</button>
      <div>
        <FormInput />
      </div>
    </>
  );
}

export default App;
