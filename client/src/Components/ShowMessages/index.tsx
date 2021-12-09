import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { IMessage } from "../../Utils/interfaces";
import { State } from "../../Redux/reducers";
import { getMessages, clearMessages } from "../../Redux/actions/Messages";

interface Props {
  messages: IMessage[];
  getMessages(): void;
  clearMessages(): void;
}

function ShowMessages({ messages, getMessages, clearMessages }: Props) {
  useEffect(() => {
    getMessages();
    return () => clearMessages();
  }, []);

  return (
    <div>
      <ul>
        {messages.map((m, i) => (
          <li key={i}>{m.content}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state: State) => {
  return {
    messages: state.messages,
  };
};

export default connect(mapStateToProps, { getMessages, clearMessages })(
  ShowMessages
);
