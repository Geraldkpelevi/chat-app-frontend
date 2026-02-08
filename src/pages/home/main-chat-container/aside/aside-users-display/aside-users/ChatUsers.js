import axios from "axios";
import { toast } from "react-toastify";

export function getAllChats (loggedInUserId, selectedUserId, setMasseges){
//   console.log(loggedInUserId, selectedUserId);
  axios
    .get("http://localhost:3000/api/messages/get-all-messages", {
      params: {
        userid1: loggedInUserId,
        userid2: selectedUserId,
      },
    })
    .then((res) => {
      if (res.data.ok) {
        
        setMasseges(res.data.result) 
     
      } else {
        throw Error("something went wrong");
      }

    //   console.log(res.data);
    })
    .catch((error) => {
      toast.error(error.message, { position: "top-center", autoClose: 2000 });
      console.log(error);
    });
};
