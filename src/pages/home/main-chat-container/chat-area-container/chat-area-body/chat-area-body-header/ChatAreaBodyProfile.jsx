import { useContext } from "react";
import { SelectedUserChatContext } from "../../../../../../context/SelectedUserChatContext";
import "./ChatAreaBodyProfile.css";

function ChatAreaBodyProfile() {

  const { selectedUserChat } = useContext(SelectedUserChatContext);
  return (
    <div className="chatAreaBodyProfile">
      <div className="chatProfile-pic">
        <img
          src={
            selectedUserChat?.gender === "male"
            ?"https://tse2.mm.bing.net/th/id/OIP.bUWRYWs_4J0ZdV1S4dU07gHaEL?rs=1&pid=ImgDetMain&o=7&rm=3"
            : "https://tse4.mm.bing.net/th/id/OIP.h4Eybdn84X5d8aSb0KxXMwHaK5?rs=1&pid=ImgDetMain&o=7&rm=3"
          }
          alt=""
        />
        <h4>{selectedUserChat?.username}</h4>
      </div>
      <div className="ChatProfile-icons-box">
        <i className="bi bi-telephone-inbound-fill"></i>
        <i className="bi bi-camera-video-fill" ></i>
      </div>
    </div>
  );
}

export default ChatAreaBodyProfile;
