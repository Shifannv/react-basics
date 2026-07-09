import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {

  const { theme } = useContext(ThemeContext);

  return (

    <div>

      <h1>

        {theme === "light"

          ? "☀️ Light Mode"

          : "🌙 Dark Mode"}

      </h1>

    </div>

  );

}

export default Header;