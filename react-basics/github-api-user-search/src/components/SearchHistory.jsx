function SearchHistory({ history = [] }) {
  if (history.length === 0) return null;

  return (
    <div className="search-history">
      <p>Recent Searches</p>
      <ul>
        {history.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;