import { createContext, useState } from "react";

 
 export const UserContext = createContext()

 function UserProvider({ children }) {

  const [user, setUser] = useState({
    name: "Shifan",
    email: "shifan@gmail.com",
    role: "React Developer",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

 export default UserProvider