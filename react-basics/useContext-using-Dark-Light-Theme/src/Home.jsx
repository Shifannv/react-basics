import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

function Home() {
  const { darkMode, setDarkMode } =
    useContext(ThemeContext);

  return (
    <div
      className={
        darkMode
          ? "dark"
          : "light"
      }
    >
      <h1>Theme Switcher</h1>

      <button
        onClick={() =>
          setDarkMode(!darkMode)
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Home;