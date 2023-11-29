import { useState } from "react";
import { Message } from "./components/Message.jsx";

function App() {
  const [message, setMessage] = useState("");

  const generateColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rbgColor = `background-color: rgb(${r} ${g} ${b});`;
    document.body.setAttribute("style", rbgColor);
  };

  return (
    <main>
      <h1>Welcome back!</h1>

      <Message>{message}</Message>

      <div>
        <input type="text" id="message" autoFocus />
        <button
          onClick={() => setMessage(document.getElementById("message").value)}
        >
          Show
        </button>
      </div>

      <button id="changeColor" onClick={generateColor}>
        Change Color
      </button>
    </main>
  );
}

export default App;
