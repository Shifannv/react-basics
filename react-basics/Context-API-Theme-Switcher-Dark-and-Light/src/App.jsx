import "./App.css";

import Header from "./components/Header";
import Content from "./components/Content";
import ThemeButton from "./components/ThemeButton";

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {

  const { theme } = useContext(ThemeContext);

  return (

    <div className={`container ${theme}`}>

      <Header />

      <Content />

      <ThemeButton />

    </div>

  );

}

export default App;