import axios from "axios";
import { toast } from "react-toastify";

export async function SigninServices(user, login) {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/auth/signin",
      user
    );

    // If request reaches here, status is 2xx
    toast.success(res.data.message || "Login successful", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });

    setTimeout(() => {
      login(res.data); // pass data if needed
    }, 2000);

    console.log(res.data);
  } catch (err) {
    const errorMessage =
      err.response?.data?.error ||
      err.response?.data?.message ||
      "Login failed";

    toast.error(errorMessage, {
      position: "top-center",
      autoClose: 2000,
    });
  }
}
