import { ChangeEvent, FormEvent, useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators } from "../../Redux";
import { State } from "../../Redux/reducers";
import { IUser } from "../../Utils/interfaces";

import styles from "./NewMessage.module.css";

function NewMessage() {
  const dispatch = useDispatch();
  const { sendMessage } = bindActionCreators(actionCreators, dispatch);
  const user: IUser = useSelector((state: State) => state.session);

  const [content, setContent] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (user.username)
      sendMessage({
        content,
        receiver: "x",
        sender: user.username,
      });
  };

  return user.username ? (
    <form className={`${styles.container}`} onSubmit={handleSubmit}>
      <input
        className={`${styles.input}`}
        onChange={handleChange}
        value={content}
        type="text"
        placeholder="Message"
      />
      <button className={`${styles.send}`}>Send</button>
    </form>
  ) : (
    <></>
  );
}

export default NewMessage;
