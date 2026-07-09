import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {

  return (
    <div className="container">

      <Navbar />

      <Home />

      <Profile />

    </div>
  );

}

export default App;