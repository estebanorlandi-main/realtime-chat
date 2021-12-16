import { useDispatch, useSelector } from "react-redux";
import { IMessage, IUser } from "../../Utils/interfaces";
import { State } from "../../Redux/reducers";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux";
import { EffectCallback, useEffect } from "react";

import styles from "./ShowMessages.module.css";

function ShowMessages() {
  const dispatch = useDispatch();

  const { getMessages, clearMessages } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const messages: IMessage[] = useSelector((state: State) => state.messages);
  const socket = useSelector((state: State) => state.socket);
  const user: IUser = useSelector((state: State) => state.session);

  socket?.on("new_message", (data: IMessage) => {
    getMessages();
  });

  useEffect((): ReturnType<EffectCallback> => {
    getMessages();
    return (): void => {
      clearMessages();
    };
  }, []);

  return (
    <ul className={styles.messages}>
      {messages.map((m, i) => (
        <li
          key={i}
          className={`${styles.message} ${
            m.sender === user.username ? styles.active : ""
          }`}
        >
          <span className={styles.sender}>{m.sender}</span>
          <span className={styles.content}>{m.content}</span>
        </li>
      ))}
    </ul>
  );
}

export default ShowMessages;
