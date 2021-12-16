import NewMessage from "../../Components/NewMessage/NewMessage";
import ShowMessages from "../../Components/ShowMessages";

function Home() {
  return (
    <main>
      <h3>Messages</h3>
      <NewMessage />
      <ShowMessages />
    </main>
  );
}
export default Home;
