import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Home from "./Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider
      value={{ darkMode, setDarkMode }}
    >
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;