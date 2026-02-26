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
  const { setMessages } = useContext(messageContext);
  const [showChatEmoji, setShowChatEmoji] = useState(false);

  useEffect(() => {
    socket.on("received-message", (serverMessage) => {
      setMessages((prevMessage) => {
        return [...prevMessage, serverMessage];
      });
    });
  }, [socket, setMessages]);
  useEffect(() => {
    socket.on("message-delivered", (data) => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.createdAt === data.createdAt
            ? { ...msg, status: "delivered" }
            : msg,
        ),
      );
    });

    return () => {
      socket.off("message-delivered");
    };
  }, [socket, setMessages]);
  const fileInputRef = useRef();
  const sendMessage = () => {
    const data = {
      userIds: [loggedInUserData._id, selectedUserChat._id],
      message: newMessageRef.current.value,
      createdAt: new Date().toISOString(),
      status: "sent",
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
        <i
          className="bi bi-file-earmark-arrow-up-fill"
          onClick={() => fileInputRef.current.click()}
        ></i>{" "}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          // onChange={handleSendImage}
        />
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
