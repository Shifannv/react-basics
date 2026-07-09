import "./App.css";

import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { useEffect, useState, useContext } from "react";
import Loading from "./components/Loading";
import useFetch from "./hooks/useFetch";
import Favorites from "./components/Favorites";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [username, setUsername] = useState("octocat");
  const [favorites, setFavorites] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    return Array.isArray(saved) ? saved : [];
  });
  const [searchUser, setSearchUser] = useState("octocat");

  const { data, loading, error } = useFetch(
    `https://api.github.com/users/${searchUser}`
  );

  function handleSearch() {
    const trimmedUsername = username.trim();
    if (trimmedUsername === "") return;

    setSearchUser(trimmedUsername);
  }

  function addFavorite() {
    if (!data?.login) return;

    const exists = favorites.some((item) => item.login === data.login);
    if (exists) return;

    setFavorites([...favorites, data]);
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className="container">
        <button onClick={toggleTheme}>🌙 Theme</button>

        <h1>GitHub User Search</h1>

        <SearchBar
          username={username}
          setUsername={setUsername}
          handleSearch={handleSearch}
        />

        {loading && <Loading />}

        {error && <h2>{error}</h2>}

        {!loading && !error && <UserCard user={data} />}

        <Favorites favorites={favorites} onSelect={setSearchUser} />

        <button onClick={addFavorite}>⭐ Add Favorite</button>
      </div>
    </div>
  );
}

export default App;