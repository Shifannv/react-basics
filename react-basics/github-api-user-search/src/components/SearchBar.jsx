import { useState } from "react";
import SearchHistory from "./SearchHistory";

function SearchBar({ username, setUsername, handleSearch }) {
  const [history, setHistory] = useState([]);

  function addToHistory(value) {
    const trimmedValue = value.trim();
    if (!trimmedValue) return;

    setHistory((prev) => {
      if (prev.includes(trimmedValue)) return prev;
      return [trimmedValue, ...prev].slice(0, 5);
    });
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addToHistory(username);
      handleSearch();
    }
  }

  function onSearchClick() {
    addToHistory(username);
    handleSearch();
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={onSearchClick}>Search</button>
      <button onClick={() => setUsername("")}>Clear</button>

      <SearchHistory history={history} />
    </div>
  );
}

export default SearchBar;