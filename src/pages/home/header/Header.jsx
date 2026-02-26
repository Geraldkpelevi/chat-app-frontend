import { use } from "react";
import {useNavigate} from "react-router-dom"
import { LoggedInUserDataContext } from "../../../context/loggedInUserData";
import "./Header.css";

function Header({ logout }) {
  const navigate = useNavigate();
  const { loggedInUserData } = use(LoggedInUserDataContext);

  
  return (
    <header className="header">
      <div className="navbar">
        <div className="navbar-logo">
          <i className="bi bi-wechat"></i>
          <p>Chat App</p>
        </div>
        <div className="Time-day">
         
        </div>
        <div className="navbar-profile">
          <div className="navbarprofile">
            <h4>{loggedInUserData.username}</h4>
          </div>
          <img
          onClick={()=>{
            navigate("/profile")
          }}
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
