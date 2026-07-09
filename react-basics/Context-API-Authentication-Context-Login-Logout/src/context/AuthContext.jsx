import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  function login() {

    setUser({
      name: "Shifan",
      email: "shifan@gmail.com",
    });

  }

  function logout() {

    setUser(null);

  }

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export default AuthProvider;