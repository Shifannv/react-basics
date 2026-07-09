import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
       <h2>{user.name}</h2> 
          <h4>{user.email}</h4>
          <h4>{user.phone}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;