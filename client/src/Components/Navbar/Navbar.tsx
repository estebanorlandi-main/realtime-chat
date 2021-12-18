import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IUser } from "../../Utils/interfaces";
import { State } from "../../Redux/reducers/";

import User from "../User/User";

import styles from "./Navbar.module.css";
import { actionCreators } from "../../Redux";
import { bindActionCreators } from "redux";

function Navbar() {
  const user: IUser = useSelector((state: State) => state.session);

  const dispatch = useDispatch();
  const { logout } = bindActionCreators(actionCreators, dispatch);

  return (
    <header>
      <nav className="container">
        <ul className={`${styles.nav__menu}`}>
          {user.username ? (
            <User
              onClick={() => logout()}
              username={user.username}
              avatar={user.avatar}
              toRight
            />
          ) : (
            <Link className={`${styles.nav__link} ${styles.login}`} to="/login">
              Login
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
