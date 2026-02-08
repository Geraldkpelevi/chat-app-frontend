import axios from "axios";
// import { toast } from "react-toastify";

export const sendMessageToUser = (data) => {
  axios
    .post("http://localhost:3000/api/messages/new-message", data)
    .then((res) => {
      res.data.ok
      // console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
