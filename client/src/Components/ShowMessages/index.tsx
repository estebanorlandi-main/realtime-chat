import { useSelector } from "react-redux";
import { IChat, IMessage, IUser } from "../../Utils/interfaces";
import { State } from "../../Redux/reducers";
import { EffectCallback, useEffect, useState } from "react";

import { useParams } from "react-router";

import styles from "./ShowMessages.module.css";

function ShowMessages() {
  const { username } = useParams();

  const chats: IChat[] = useSelector((state: State) => state.chats);
  const user: IUser = useSelector((state: State) => state.session);

  const chat = chats.filter(
    ({ userA, userB }) =>
      (userA.username === user.username && userB.username === username) ||
      (userB.username === user.username && userA.username === username)
  );

  //useEffect((): ReturnType<EffectCallback> => {}, [params.username]);

  return (
    <ul className={styles.messages}>
      {chat[0]?.messages?.map(({ from, content }: IMessage, i) => (
        <li
          key={i}
          className={`${styles.message} ${
            from?.username === user.username ? styles.active : ""
          }`}
        >
          <span className={styles.sender}>{from?.username}</span>
          <span className={styles.content}>{content}</span>
        </li>
      ))}
    </ul>
  );
}

export default ShowMessages;
