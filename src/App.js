import { useOnlineStatus } from "./useonlineStatus";
import "./App.css";
import { Books } from "./Books";
import { Comments } from "./Comments";

function StatusBar() {
  const isOnline = useOnlineStatus();

  return <h4>{isOnline ? "✅ Online" : "❌ Disconnected"}</h4>;
}

export default function App() {
  return (
    <div className="status">
      <p>Example of custom hook 1</p>
      <p>====================</p>
      <ul>
        <li>Component name - App</li>
        <li>Hook name - useOnlineStatus</li>
        <li>
          Details: Disconnect the network connection and see the changes status
        </li>
      </ul>
      <StatusBar></StatusBar>
      <br />
      <br />
      <p>Example of custom hook 2</p>
      <p>====================</p>
      <ul>
        <li>Component name - Books</li>
        <li>Hook name - useAPiCall</li>
      </ul>
      <Books></Books>
      <br />
      <br />
      <p>Example of custom hook 3</p>
      <p>====================</p>
      <ul>
        <li>Component name - Comments</li>
        <li>Hook name - useAPiCall</li>
        <li>Details: Next and prev button will display next comment</li>
      </ul>
      <img src={"code.png"} alt="code"></img>
      <Comments></Comments>
    </div>
  );
}
