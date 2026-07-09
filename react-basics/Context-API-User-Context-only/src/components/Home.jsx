import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Home() {

  const { user } = useContext(UserContext);

  return (
    <div className="box">

      <h2>🏠 Home</h2>

      <p>Hello, {user.name}</p>

    </div>
  );

}

export default Home;