import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AllUsersContext } from "../../context/allUsersContext";
import { LoggedInUserDataContext } from "../../context/loggedInUserData.js";
import { OnlineUsersContext } from "../../context/onlineUsersContext.js";
import Header from "./header/Header";
import "./Home.css";
import { getAllUsersEscepLoginUser } from "./Home.js";
import MainChatContainer from "./main-chat-container/MainChatContainer.jsx";

const socket = io("http://localhost:3000");
function Home({ logout }) {
  const [allUsersData, setAllUsersData] = useState(null);
  const { loggedInUserData } = useContext(LoggedInUserDataContext);
  const [ onlineUsers, setOnlineUsers ] = useState([]);

  useEffect(() => {
    socket.emit("join", loggedInUserData._id);
    socket.on("online", (onlineUserIds) => {
      setOnlineUsers(onlineUserIds);
    });
    getAllUsersEscepLoginUser(loggedInUserData._id, setAllUsersData);
  }, []);

  return (
    <>
      <div className="home">
        <Header logout={logout} />
        <OnlineUsersContext.Provider value={{ onlineUsers, setOnlineUsers }}>
          <AllUsersContext value={{ allUsersData, setAllUsersData }}>
            <MainChatContainer socket={socket} />
          </AllUsersContext>
        </OnlineUsersContext.Provider>
      </div>
    </>
  );
}

export default Home;
