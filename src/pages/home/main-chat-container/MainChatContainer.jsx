import { useState } from "react";
import MessageContext from "../../../context/messageContext.js";
import { SelectedUserChatContext } from "../../../context/selectedUserChatContext.js";
import "./MainChatContainer.css";
import Aside from "./aside/Aside.jsx";
import MainChat from "./chat-area-container/MainChat.jsx";
function MainChatContainer({ socket }) {
  const [selectedUserChat, setSelectedUserChat] = useState(null);
  const [messages, setMessages] = useState([]);
  return (
    <div className="Main">
      <SelectedUserChatContext.Provider
        value={{ selectedUserChat, setSelectedUserChat }}
      >
        <MessageContext.Provider value={{ messages, setMessages }}>
          <Aside />
          <MainChat socket={socket} />
        </MessageContext.Provider>
      </SelectedUserChatContext.Provider>
    </div>
  );
}

export default MainChatContainer;
