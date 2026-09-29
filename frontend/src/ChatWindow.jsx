import "./ChatWindow.css";
import Chat from "./Chat";
import { MyContext } from "./MyContext";
import { useContext } from "react";

function ChatWindow() {
  const [prompt,setPrompt,reply,setReply] = useContext(MyContext);
  return (
    <div className="chatWindow">
      <div className="navbar">
        <span>
          ChatterBox <i class="fa-solid fa-chevron-down"></i>
        </span>

        <div className="userIcon">
          <span className="userIconSpan">
            <i class="fa-solid fa-user"></i>
          </span>
        </div>
      </div>

      <Chat />

      <div className="chatInput">
        <div className="userInput">
          <input placeholder="Ask anything" value={prompt} onChange={(e)=> e.target.value}></input>
          <div id="submit">
            <i class="fa-solid fa-arrow-up"></i>
          </div>
        </div>
        <p className="info">
          ChatterBox can make mistakes.Check important info.See Cookie
          Preferences.
        </p>
      </div>
    </div>
  );
}

export default ChatWindow;
