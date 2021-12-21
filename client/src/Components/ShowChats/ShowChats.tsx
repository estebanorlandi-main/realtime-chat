import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { State } from "../../Redux/reducers";
import { IUser } from "../../Utils/interfaces";
import User from "../User/User";

import styles from "./ShowChats.module.css";

function ShowChats() {
  const chats: IUser[] = useSelector((state: State) => state.chats);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (username: string) => pathname === "/home/" + username;

  return (
    <ul className={styles.usersList}>
      {chats.map(({ username, avatar }: IUser, i) => (
        <li className={isActive(username) ? styles.active : ""} key={i}>
          <User
            onClick={() => navigate(`${username}`)}
            avatar={avatar}
            username={username}
            toLeft
          />
        </li>
      ))}
    </ul>
  );
}

export default ShowChats;
