import NewMessage from "../NewMessage/NewMessage";
import ShowMessages from "../ShowMessages";

function Chat() {
  return (
    <div className="right">
      <ShowMessages />
      <NewMessage />
    </div>
  );
}
export default Chat;
