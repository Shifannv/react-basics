import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Welcome User");
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}

export default App;
