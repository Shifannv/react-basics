import { useState } from "react";

function App() {
  const [isLoggedIn,
         setIsLoggedIn] =
    useState(false);

  return (
    <div>

      <h1>
        {
          isLoggedIn
            ? "Welcome User"
            : "Please Login"
        }
      </h1>

      <button
        onClick={() =>
          setIsLoggedIn(!isLoggedIn)
        }
      >
        {
          isLoggedIn
            ? "Logout"
            : "Login"
        }
      </button>

    </div>
  )
  
}

export default App;