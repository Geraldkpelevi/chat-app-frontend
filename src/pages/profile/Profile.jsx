import { use } from "react";
import { Link } from "react-router-dom";
import { LoggedInUserDataContext } from "../../context/loggedInUserData.js";
import "./Profile.css";

function Profile() {
  const { loggedInUserData } = use(LoggedInUserDataContext);

  return (
    <div className="Profile">
      <div className="profile-image-user-name">
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.bUWRYWs_4J0ZdV1S4dU07gHaEL?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt=""
        />
        <h1>{loggedInUserData?.username}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          pariatur repudiandae! Delectus nesciunt voluptatem beatae odit, odio,
          ex obcaecati, quas quo totam asperiores accusantium? Quidem in modi
          necessitatibus consequuntur delectus!
        </p>
        <div className="profile-icons">
            <span className="cursor-pointer">📞</span>
            <span className="cursor-pointer">🎥</span>
            <span className="cursor-pointer">💬</span>
          </div>
      </div>
      <div className="profile-details">
        <div className="details-par">
          <h1>Profile details</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            exercitationem, quod, quae iure, quibusdam quos quidem quas quae
            quam
          </p>
          <hr className="hr" />
        </div>
        
        <div className="profile-input">
          <hr />
          <div className="name-passwd">
            <div>
              <label htmlFor="">Full Name</label>
              <input
                value={loggedInUserData?.username}
                type="text"
                placeholder="enter FullName"
              />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input
                value={loggedInUserData?.password}
                type="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="name-passwd">
            <div>
              <label htmlFor="">Email</label>
              <input
                value={loggedInUserData?.email}
                type="email"
                placeholder="email"
              />
            </div>
            <div>
              <label htmlFor="">City</label>
              <input
                value={loggedInUserData?.city}
                type="text"
                placeholder="city"
              />
            </div>
          </div>

          <div className="name-passwd">
            <div>
            <label htmlFor="">Gender</label>
            <input
              value={loggedInUserData?.gender}
              type="text"
              placeholder="gender"
            />
            </div>
          </div>
        </div>
        <div>
          <Link to="/">
            <button className="button">Back to Home</button>
          </Link>
          <Link to="/">
            <button className="button">Update</button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Profile;
