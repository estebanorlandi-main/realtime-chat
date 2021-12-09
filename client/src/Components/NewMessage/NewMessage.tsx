import { ChangeEvent, FormEvent, useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

import { actionCreators } from "../../Redux";

function NewMessage() {
  const dispatch = useDispatch();
  const { sendMessage } = bindActionCreators(actionCreators, dispatch);

  const [content, setContent] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const receiver = "asdf";
    const sender = "asdf";

    sendMessage({ content, receiver, sender });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={content}
        type="text"
        placeholder="Message"
      />
    </form>
  );
}

export default NewMessage;
