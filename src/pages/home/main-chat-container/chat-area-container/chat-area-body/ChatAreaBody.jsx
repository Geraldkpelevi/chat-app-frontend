import { useContext } from "react";
import { LoggedInUserDataContext } from "../../../../../context/loggedInUserData";
import MessageContext from "../../../../../context/messageContext";
import "./ChatAreaBody.css";

function ChatAreaBody() {
  const { messages } = useContext(MessageContext);
  const { loggedInUserData } = useContext(LoggedInUserDataContext);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <div className="chatAreaBody">
      {messages &&
        messages.map(({ message, userIds, createdAt, status }, index) => {
          const isSent = userIds[0] === loggedInUserData._id;

          return (
            <div
              key={index}
              className={`message ${
                isSent ? "send-message" : "received-message"
              }`}
            >
              <div className="message-text">{message}</div>

              {createdAt && (
                <div className="message-footer">
                  <span className="message-time">
                    {formatTime(createdAt)}
                  </span>

                  {isSent && (
                    <span className="message-status">
                      {status === "sent" && "✓"}
                      {status === "delivered" && "✓✓"}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}


export default ChatAreaBody;
