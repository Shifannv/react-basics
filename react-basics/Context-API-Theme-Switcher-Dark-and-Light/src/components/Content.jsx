import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Content() {

  const { theme } = useContext(ThemeContext);

  return (

    <div>

      <p>

        Current Theme :

        <strong>

          {" "}

          {theme}

        </strong>

      </p>

    </div>

  );

}

export default Content;