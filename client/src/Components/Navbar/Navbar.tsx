import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../Utils/interfaces";
import { State } from "../../Redux/reducers/";

import User from "../User/User";

import styles from "./Navbar.module.css";
import { actionCreators } from "../../Redux";
import { bindActionCreators } from "redux";

function Navbar() {
  const user: IUser = useSelector((state: State) => state.session);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { logout } = bindActionCreators(actionCreators, dispatch);

  const profile = () => {
    navigate("/profile");
  };

  return (
    <header>
      <nav className="container">
        <ul className={`${styles.nav__menu}`}>
          {user.username ? (
            <User
              onClick={profile}
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
