import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {

  const { user } = useContext(UserContext);

  return (
    <div className="box">

      <h2>👤 Profile</h2>
      

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Role:</strong> {user.role}
      </p>

    </div>
  );

}

export default Profile;