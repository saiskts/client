import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState(false);
  const messageHandle = async () => {
    try {
      const response = await fetch("http://localhost:4000/api");
      if (!response.ok) {
        throw Error("Network response not ok");
      }
      const data = await response.json();
      setMessage(data);
      setButtonText(!buttonText);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <button onClick={messageHandle}>
        {buttonText ? "Hide Message" : "Get Message"}
      </button>
      {buttonText && <h1>{message}</h1>}
    </div>
  );
}

export default App;
