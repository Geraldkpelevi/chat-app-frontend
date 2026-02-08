import { use } from "react";
import { LoggedInUserDataContext } from "../../../context/loggedInUserData";
import "./Header.css";

function Header({ logout }) {
  const { loggedInUserData } = use(LoggedInUserDataContext);

  // const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);

  //   return () => clearInterval(interval); // cleanup
  // }, []);

  return (
    <header className="header">
      <div className="navbar">
        <div className="navbar-logo">
          <i className="bi bi-wechat"></i>
          <p>Chat App</p>
        </div>
        <div className="Time-day">
          {/* <p className="text-xs text-gray-500">
            {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
          <p className="time">
            {time.toLocaleString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </p> */}
        </div>
        <div className="navbar-profile">
          <div className="navbarprofile">
            <h4>{loggedInUserData.username}</h4>
          </div>
          <img
            src={
              loggedInUserData.gender === "male"
                ? "https://tse2.mm.bing.net/th/id/OIP.bUWRYWs_4J0ZdV1S4dU07gHaEL?rs=1&pid=ImgDetMain&o=7&rm=3"
                : "https://tse4.mm.bing.net/th/id/OIP.h4Eybdn84X5d8aSb0KxXMwHaK5?rs=1&pid=ImgDetMain&o=7&rm=3"
            }
            alt=""
          />

          <i className="bi bi-power" onClick={logout}></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
