import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { State } from "../../Redux/reducers";
import { IUser } from "../../Utils/interfaces";
import User from "../User/User";

import styles from "./ShowChats.module.css";

function ShowChats() {
  const chats: IUser[] = useSelector((state: State) => state.chats);
  const navigate = useNavigate();

  return (
    <ul className={styles.usersList}>
      {chats.map(({ username, avatar }: IUser) => (
        <li>
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
