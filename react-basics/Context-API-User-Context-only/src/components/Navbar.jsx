import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Navbar() {

  const { user } = useContext(UserContext);

  return (
    <div className="box">

      <h2>
        Welcome, {user.name} 👋
      </h2>

    </div>
  );

}

export default Navbar;