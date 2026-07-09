import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <h1>useRef Example</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
      />

      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  );
}

export default App;