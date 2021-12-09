import { ChangeEvent, FormEvent, useState } from "react";
import ShowMessages from "./Components/ShowMessages";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <header>
        <h1>Realtime Chat</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={message}
          type="text"
          placeholder="Message"
        />
      </form>

      <ShowMessages />
    </div>
  );
}

export default App;
