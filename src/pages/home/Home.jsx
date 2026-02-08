import { use, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AllUsersContext } from "../../context/allUsersContext";
import { LoggedInUserDataContext } from "../../context/loggedInUserData.js";
import Header from "./header/Header";
import "./Home.css";
import { getAllUsersEscepLoginUser } from "./Home.js";
import MainChatContainer from "./main-chat-container/MainChatContainer.jsx";

const socket = io("http://localhost:3000");
function Home({ logout }) {
  const [allUsersData, setAllUsersData] = useState(null);
  const { loggedInUserData } = use(LoggedInUserDataContext);

  useEffect(() => {
    socket.emit("join", loggedInUserData._id);
    getAllUsersEscepLoginUser(loggedInUserData._id, setAllUsersData);
  }, []);

  return (
    <>
      <div className="home">
        <Header logout={logout} />
        <AllUsersContext value={{ allUsersData, setAllUsersData }}>
          <MainChatContainer socket={socket} />
        </AllUsersContext>
      </div>
    </>
  );
}

export default Home;
