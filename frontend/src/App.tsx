import { useEffect, useState } from "react";


function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:9000/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error("Fetch error:", error);
        setMessage("Fehler beim Laden der Nachricht");
      });

  }, []);

  const play = () => {
    alert("Play wurde ausgelöst!");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={play}>Play</button>
    </div>
  );
}

export default App;
