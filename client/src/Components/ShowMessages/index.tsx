import { useSelector } from "react-redux";
import { IMessage, IUser } from "../../Utils/interfaces";
import { State } from "../../Redux/reducers";
import { EffectCallback, useEffect, useState } from "react";

import { useParams } from "react-router";

import messages from "../../Utils/mockups/messages.json";

import styles from "./ShowMessages.module.css";

function ShowMessages() {
  const params = useParams();

  const user: IUser = useSelector((state: State) => state.session);

  const [filtered, setFiltered] = useState<IMessage[]>([]);

  useEffect((): ReturnType<EffectCallback> => {
    setFiltered(messages.filter((m) => m.sender.username === params.username));
    return (): void => setFiltered([]);
  }, [params.username]);

  return (
    <ul className={styles.messages}>
      {filtered.map(({ sender, content }, i) => (
        <li
          key={i}
          className={`${styles.message} ${
            sender?.username === user.username ? styles.active : ""
          }`}
        >
          <span className={styles.sender}>{sender?.username}</span>
          <span className={styles.content}>{content}</span>
        </li>
      ))}
    </ul>
  );
}

export default ShowMessages;
