import { ChangeEvent, FormEvent, useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators } from "../../Redux";
import { State } from "../../Redux/reducers";
import { IUser } from "../../Utils/interfaces";

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
      sendMessage({ content, receiver: "B", sender: user.username });
  };

  return user.username ? (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={content}
        type="text"
        placeholder="Message"
      />
    </form>
  ) : (
    <></>
  );
}

export default NewMessage;
