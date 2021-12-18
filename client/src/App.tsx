/*
import { useDispatch, useSelector } from "react-redux";
import { State } from "./Redux/reducers";

import { bindActionCreators } from "redux";
import * as ac from "./Redux/actions/";
import { useEffect } from "react";
import { IUser } from "./Utils/interfaces";
*/

import { Route, Routes } from "react-router";

import Navbar from "./Components/Navbar/Navbar";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";

import Chat from "./Components/Chat/Chat";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />}>
          <Route path=":username" element={<Chat />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
