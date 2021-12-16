import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IUser } from "../../Utils/interfaces";
import { State } from "../../Redux/reducers/";

function Navbar() {
  const user: IUser = useSelector((state: State) => state.session);

  return (
    <header>
      <nav className="container">
        <Link className="nav__link brand" to="/">
          Chat
        </Link>
        <ul className="nav__menu">
          <Link className="nav__link" to="/home">
            Home
          </Link>

          {user.username ? (
            <>
              <button onClick={() => console.log(user)}>{user.username}</button>
            </>
          ) : (
            <Link className="nav__link" to="/login">
              Login
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
