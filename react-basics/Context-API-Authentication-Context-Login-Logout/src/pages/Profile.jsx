import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

function Profile() {

  const {

    user,

  } = useContext(AuthContext);

  return (

    <div>

      <h1>

        Profile

      </h1>

      <h2>

        {user.name}

      </h2>

      <p>

        {user.email}

      </p>

    </div>

  );

}

export default Profile;