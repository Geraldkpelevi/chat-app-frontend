import { useContext } from "react";
import { AllUsersContext } from "../../../../../context/allUsersContext";
import "./AsideUserDisplay.css";
import ChatUsers from "./aside-users/ChatUsers.jsx";

function AsideUserDisplay() {
  const { allUsersData } = useContext(AllUsersContext);
  return (
    <div className="aside-users">
      <div className="chat-users-profile">
        {allUsersData && allUsersData.map((user) => {
          return <ChatUsers user={user} key={user._id} />
        } )}
      </div>
    </div>
  );
}

export default AsideUserDisplay;
