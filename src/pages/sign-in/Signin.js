import axios from "axios";
import { toast } from "react-toastify";

export function SigninServices(user, login, setLoggedInUserData) {
  axios
    .post("http://localhost:3000/api/auth/signin", user)
    .then((res) => {
      if (res.data.ok) {setLoggedInUserData(res.data.user);

        // navigate("/home");

        // toast.success(res.data.result, {
        //   position: "top-center",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "dark",
        // });
        setTimeout(() => {
          login();
        }, 500);
        console.log(res.data);
      } else {
        throw Error(res.data.error);
      }
    })
    .catch((err) => {
      toast.error(err.message, { autoClose: 2000,  position: "top-center" });
    });
}
