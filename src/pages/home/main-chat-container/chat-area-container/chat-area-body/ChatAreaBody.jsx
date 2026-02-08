import { useContext } from "react";
import { LoggedInUserDataContext } from "../../../../../context/loggedInUserData";
import MessageContext from "../../../../../context/messageContext";
import "./ChatAreaBody.css";

function ChatAreaBody() {
  const { messages } = useContext(MessageContext);
  const { loggedInUserData } = useContext(LoggedInUserDataContext);
  // console.log(messages);

  return (
    <div className="chatAreaBody">
      {messages &&
        messages.map(({ message, userIds }) => {
          return (
            <div
              className={
                userIds[0] === loggedInUserData._id
                  ? "message send-message"
                  : "message received-message"
              }
            >
              {message}{" "}
            </div>
          );
        })}
    </div>
  );
}

export default ChatAreaBody;
