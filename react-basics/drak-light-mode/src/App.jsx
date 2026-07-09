import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode
          ? "black"
          : "white",

        color: darkMode
          ? "white"
          : "black",

        height: "100vh",
      }}
    >
      <h1 >Dark Mode Example</h1>

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

export default App;