import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [date, setDate] = useState(new Date().toLocaleDateString())
  const [greet ] = useState(() => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good Morning 🌞"
    if (hour < 16) return "Good Afternoon ☀️"
    return "Good Evening 🌙"
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const Dates = setInterval(() => {
      setDate(new Date().toLocaleDateString())
    }, 1000)
    return () => clearInterval(Dates)
  }, [])

  // useEffect(() => {
  //   const greets = setInterval(() => {
  //     setGreet(new Date().getHours())
  //   }, 1000)
  //   return () => clearInterval(greets)
  // }, [])
    
    
    return (
      <div
      style={{
        textAlign: "center",
        marginTop: "100px"
      }}
    >
      <h1>🕒 Digital Clock</h1>
      <br></br>
      <h2>{date}</h2>
      <h2>{time}</h2>
      <br></br>
      <h1>{greet}</h1>
     
    </div>
  );
}

export default App;