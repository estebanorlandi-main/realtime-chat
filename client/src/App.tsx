import { useDispatch, useSelector } from "react-redux";
import { State } from "./Redux/reducers";

import { bindActionCreators } from "redux";
import * as ac from "./Redux/actions/";
import { useEffect } from "react";
import { IUser } from "./Utils/interfaces";
import { Route, Routes } from "react-router";

import Navbar from "./Components/Navbar/Navbar";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { connectSocket, disconnectSocket } = bindActionCreators(ac, dispatch);

  const user: IUser = useSelector((state: State) => state.session);

  useEffect(() => {
    if (user.username) connectSocket();
    else disconnectSocket();
  }, [user]);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
