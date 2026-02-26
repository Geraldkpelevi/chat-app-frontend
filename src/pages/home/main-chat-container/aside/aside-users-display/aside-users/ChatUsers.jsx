import { useContext } from "react";
import { LoggedInUserDataContext } from "../../../../../../context/loggedInUserData.js";
import  MessageContext  from "../../../../../../context/messageContext.js";
import { SelectedUserChatContext } from "../../../../../../context/selectedUserChatContext.js";
import { OnlineUsersContext } from "../../../../../../context/onlineUsersContext.js"; 
import "./ChatUsers.css";
import { getAllChats } from "./ChatUsers.js";

function ChatUsers({ user }) {
  const { selectedUserChat, setSelectedUserChat } = useContext(
    SelectedUserChatContext,
  );
  const { loggedInUserData } = useContext(LoggedInUserDataContext);
  const { setMessages } = useContext(MessageContext);
  const {onlineUsers} = useContext(OnlineUsersContext)
  const isActive = selectedUserChat?._id === user?._id;

  

  return (
    <div
      className={`aside-users-profile ${isActive ? "active" : ""}`}
      onClick={() => {
        setSelectedUserChat(user);
        getAllChats(loggedInUserData._id, user._id, setMessages);
      }} 
    >
      <div className="chat-user-image">
        <div className="mode" style={{ backgroundColor:onlineUsers.includes(user._id) ? "green" : "red"}}></div>
        <img
          src={
            user?.gender === "male"
              ? "https://tse2.mm.bing.net/th/id/OIP.bUWRYWs_4J0ZdV1S4dU07gHaEL?rs=1&pid=ImgDetMain&o=7&rm=3"
              : "https://tse4.mm.bing.net/th/id/OIP.h4Eybdn84X5d8aSb0KxXMwHaK5?rs=1&pid=ImgDetMain&o=7&rm=3"
          }
          alt=""
        />
      </div>

      <div className="asideusers">
        <h2>{user?.username}</h2>
        <p>{user?.email}</p>
      </div>
    </div>
  );
}

export default ChatUsers;
