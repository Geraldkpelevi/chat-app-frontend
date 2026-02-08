import axios from "axios";
const URL = "http://localhost:3000/api/users/get-all-users";
export const getAllUsersEscepLoginUser = (id, setAllUsersData) => {
  axios
    .get(URL, {
      params: {
        id: id,
      },
    })
    .then((res) => {
      if (res.data.ok) {
        setAllUsersData(res.data.result);
      }else{
        throw Error(res.data.error);
      };
      // console.log("ten", res.data);
    })
    .catch((err) => {
      console.log("catch", err);
    });
};
