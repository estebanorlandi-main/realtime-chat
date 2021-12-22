import ShowChats from "../../Components/ShowChats/ShowChats";
import { Navigate, Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Redux/reducers";
import { IUser } from "../../Utils/interfaces";
import { actionCreators } from "../../Redux";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";

function Home() {
  const dispatch = useDispatch();
  const session: IUser = useSelector((state: State) => state.session);
  const io: any = useSelector((state: State) => state.socket);
  const [newMessage, setNewMessage] = useState(false);

  const { getChats, connectSocket, disconnectSocket } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    connectSocket();
    return () => {
      disconnectSocket();
    };
  }, []);

  useEffect(() => {
    if (newMessage) getChats(session.username);
    setNewMessage(false);
  }, [newMessage]);

  io?.on("new_message", (data: any) => {
    setNewMessage(true);
  });

  return session.username ? (
    <div className="home">
      <aside>
        <ShowChats />
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/" />
  );
}
export default Home;
