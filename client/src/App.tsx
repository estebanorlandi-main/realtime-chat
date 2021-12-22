import { Route, Routes } from "react-router";

import Navbar from "./Components/Navbar/Navbar";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

import Chat from "./Components/Chat/Chat";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />}>
          <Route path=":username" element={<Chat />} />
        </Route>

        <Route path="/" element={<h1>Realtime Chat</h1>} />
      </Routes>
    </div>
  );
}

export default App;
