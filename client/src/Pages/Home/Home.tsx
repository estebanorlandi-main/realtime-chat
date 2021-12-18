import ShowChats from "../../Components/ShowChats/ShowChats";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { State } from "../../Redux/reducers";
import { IUser } from "../../Utils/interfaces";

function Home() {
  const session: IUser = useSelector((state: State) => state.session);

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
    <h1>Login First</h1>
  );
}
export default Home;
