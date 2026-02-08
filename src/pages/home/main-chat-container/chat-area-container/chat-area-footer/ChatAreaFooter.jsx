import EmojiPicker from "emoji-picker-react";
import { useContext, useEffect, useRef, useState } from "react";
import { LoggedInUserDataContext } from "../../../../../context/loggedInUserData";
import messageContext from "../../../../../context/messageContext";
import { SelectedUserChatContext } from "../../../../../context/selectedUserChatContext";
import "./ChatAreaFooter.css";
import { sendMessageToUser } from "./ChatAreaFooter.js";

function ChatAreaFooter({ socket }) {
  const newMessageRef = useRef();
  const { loggedInUserData } = useContext(LoggedInUserDataContext);
  const { selectedUserChat } = useContext(SelectedUserChatContext);
  const { setMasseges } = useContext(messageContext);
  const [showChatEmoji, setShowChatEmoji] = useState(false);

  useEffect(() => {
    socket.on("received-message", (serverMessage) => {
      setMasseges((prevMessage) => {
        return [...prevMessage, serverMessage];
      });
    });
  }, []);
  const sendMessage = () => {
    const data = {
      userIds: [loggedInUserData._id, selectedUserChat._id],
      message: newMessageRef.current.value,
    };

    socket.emit("send-message", data);

    sendMessageToUser(data);
    newMessageRef.current.value = "";
    setShowChatEmoji(false);
  };
  return (
    <div className="main-chat-footer">
      <div className="chat-footer-input">
        <input type="text" placeholder="Enter message" ref={newMessageRef} />
      </div>
      <div className="chat-footer-icons">
        <i
          className="bi bi-emoji-smile-fill"
          onClick={() => {
            setShowChatEmoji(!showChatEmoji);
          }}
        ></i>
        <i className="bi bi-mic-fill"></i>
        <i className="bi bi-send-fill" onClick={sendMessage}></i>
      </div>
      <div className="chat-emoji">
        <EmojiPicker
        width={800}
          open={showChatEmoji}
          onEmojiClick={(e) => {
            newMessageRef.current.value += e.emoji;
          }}
        />
      </div>
    </div>
  );
}

export default ChatAreaFooter;
