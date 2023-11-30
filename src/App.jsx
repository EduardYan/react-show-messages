import { useState } from "react";
import { Message } from "./components/Message.jsx";
import { generateColor } from "./logic/message.js";

function App() {
  const [message, setMessage] = useState("");

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
