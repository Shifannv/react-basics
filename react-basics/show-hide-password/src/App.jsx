import { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2>Show / Hide Password</h2>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
      />

      <br />
      {/* <br /> */}
      <button
        onClick={() =>
          setShowPassword(!showPassword)
        }
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;