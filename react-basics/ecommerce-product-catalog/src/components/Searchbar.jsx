function SearchBar({
  search,
  setSearch
}) {
  return (

    <div className="search">

      <input
        type="text"
        placeholder="Search Products..."

        value={search}

        onChange={(e) =>
          setSearch(e.target.value)
        }

      />

      <button
        onClick={() => setSearch("")}
      >
        Clear
      </button>

    </div>

  );
}

export default SearchBar;