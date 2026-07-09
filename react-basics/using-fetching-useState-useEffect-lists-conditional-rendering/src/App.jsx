import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })

      .then((data) => {
        setUsers(data);
        setLoading(false);
      })

      .catch(() => {
        setError("Something went wrong!");
        setLoading(false);
      });
    }, []);
    
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
  );
  
  // if (filteredUsers.length === 0) {
  // return <h1>❌ No Users Found</h1>
  // }
  
if (loading) {
  return <h1>Loading...</h1>;
}

if (error) {
  return <h1>{error}</h1>;
}

return (
  <div className="container">

      <h1>User Directory</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search User..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="button1" onClick={() => setSearch(searchTerm)}>
          Search
        </button>

        <button
          className="button1"
          onClick={() => {
            setSearch("");
            setSearchTerm("");
          }}
        >
          Clear
        </button>
      </div>

      {filteredUsers.length === 0 ? (
        <h1 className="head">❌ No Users Found</h1>
      ) : (
        <div className="users">
          {filteredUsers.map((user) => (
            <div className="card" key={user.id}>
              <h2>{user.name}</h2>

              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <p>
                <strong>Phone:</strong> {user.phone}
              </p>

              <p>
                <strong>comapany name</strong> {user.company.name}
              </p>
              <p>
                <strong>Website :</strong> {user.website}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;