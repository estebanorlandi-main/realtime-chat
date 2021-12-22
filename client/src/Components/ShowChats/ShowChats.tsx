import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux";
import { State } from "../../Redux/reducers";
import { IChat, IUser } from "../../Utils/interfaces";
import User from "../User/User";

import styles from "./ShowChats.module.css";

function ShowChats() {
  const chats: IChat[] = useSelector((state: State) => state.chats);
  const session: IUser = useSelector((state: State) => state.session);

  const dispatch = useDispatch();

  const { getChats } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (session?.username) getChats(session.username);
  }, []);

  useEffect(() => console.log(chats), [chats]);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (username: string) => pathname === "/home/" + username;

  return (
    <ul className={styles.usersList}>
      {chats.map(({ userA, userB }: IChat, i) => {
        const user = userA.username === session.username ? userB : userA;
        return (
          <li className={isActive(user.username) ? styles.active : ""} key={i}>
            <User
              onClick={() => navigate(`${user.username}`)}
              avatar={user.avatar}
              username={user.username}
              toLeft
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ShowChats;
