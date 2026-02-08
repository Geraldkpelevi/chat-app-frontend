import { useState } from "react";
import  MessageContext  from "../../../context/messageContext.js";
import { SelectedUserChatContext } from "../../../context/selectedUserChatContext.js";
import "./MainChatContainer.css";
import Aside from "./aside/Aside.jsx";
import MainChat from "./chat-area-container/MainChat.jsx";
function MainChatContainer({ socket }) {
  const [selectedUserChat, setSelectedUserChat] = useState(null);
  const [messages, setMasseges] = useState(null);
  return (
    <div className="Main">
      <SelectedUserChatContext
        value={{ selectedUserChat, setSelectedUserChat }}
      >
        <MessageContext value={{ messages, setMasseges }}>
          <Aside />
          <MainChat socket={socket} />
        </MessageContext>
      </SelectedUserChatContext>
    </div>
  );
}

export default MainChatContainer;
