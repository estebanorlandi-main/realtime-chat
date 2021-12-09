import ShowMessages from "./Components/ShowMessages";
import NewMessage from "./Components/NewMessage/NewMessage";

import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { State } from "./Redux/reducers";

import { bindActionCreators } from "redux";
import * as ac from "./Redux/actions/";

function App() {
  const dispatch = useDispatch();
  const { connectSocket, disconnectSocket } = bindActionCreators(ac, dispatch);

  const socket = useSelector((state: State) => state.socket);
  console.log(socket);

  const login = () => connectSocket();
  const logout = () => disconnectSocket();

  return (
    <div className="App">
      <header>
        <h1>Realtime Chat</h1>
      </header>

      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>

      <NewMessage />
      <ShowMessages />
    </div>
  );
}

export default App;
