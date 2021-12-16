import { useDispatch, useSelector } from "react-redux";
import { IMessage } from "../../Utils/interfaces";
import { State } from "../../Redux/reducers";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux";
import { EffectCallback, useEffect } from "react";

function ShowMessages() {
  const dispatch = useDispatch();

  const { getMessages, clearMessages } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const messages: IMessage[] = useSelector((state: State) => state.messages);
  const socket = useSelector((state: State) => state.socket);

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
    <div>
      <ul>
        {messages.map((m, i) => (
          <li key={i}>
            {m.sender}: {m.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowMessages;
