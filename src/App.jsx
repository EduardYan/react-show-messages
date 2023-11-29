import { useState } from "react";
import { Message } from "./components/Message.jsx";

function App() {
  const [message, setMessage] = useState("");

  return (
    <main>
      <h1>Welcome back!</h1>

      <Message>{message}</Message>

      <div>
        <input type="text" id="message" />
        <button
          onClick={() => setMessage(document.getElementById("message").value)}
        >
          Show
        </button>
      </div>
    </main>
  );
}

export default App;
