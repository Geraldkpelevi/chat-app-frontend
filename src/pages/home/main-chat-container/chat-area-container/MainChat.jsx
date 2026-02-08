import "./MainChat.css";
import ChatAreaBody from "./chat-area-body/ChatAreaBody.jsx";
import ChatAreaBodyProfile from "./chat-area-body/chat-area-body-header/ChatAreaBodyProfile.jsx";
import ChatAreaFooter from "./chat-area-footer/ChatAreaFooter.jsx";

function MainChat({ socket }) {
  return (
    <aside className="main-chat">
      <ChatAreaBodyProfile />
      <ChatAreaBody />
      <ChatAreaFooter socket={socket}/>
    </aside>
  );
}

export default MainChat;
