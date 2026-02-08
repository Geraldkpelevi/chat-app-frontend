import axios from "axios";
import { toast } from "react-toastify";

export const createAccount = (
  usernameRef,
  passwordRef,
  emailRef,
  genderRef,
  cityRef,
  navigate
) => {
  const newuser = {
    username: usernameRef.current.value,
    password: passwordRef.current.value,
    email: emailRef.current.value,
    gender: genderRef.current.value,
    city: cityRef.current.value,
  };

  axios
    .post("http://localhost:3000/api/auth/signup", newuser)
    .then((res) => {
      if (res.data.ok) {
        usernameRef.current.value = "";
        passwordRef.current.value = "";
        emailRef.current.value = "";
        genderRef.current.value = "";
        cityRef.current.value = "";

        toast.success(res.data.result, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        throw new Error("Something went wrong");
      }
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
};

// export default createAccount;
