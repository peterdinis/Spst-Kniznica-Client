import axios from "axios";
import storage from "../utils/storage"

const api = axios.create({
    baseURL: "http://localhost:3001"
  });


export const getUserProfile = () => {
  if (
    storage.getToken() !== null &&
    storage.getToken() !== undefined &&
    storage.getToken()!.length > 0
  ) {
      return api.get("/users/me", {
        headers: {
          Authorization: `Bearer ${storage.getToken()}`
        }
      })
  } else {
      console.log("Something went wrong");
      return;
  }
}

export const myProfile = async () => {
  let user: any;

  if (
    storage.getToken() !== null &&
    storage.getToken() !== undefined &&
    storage.getToken()!.length > 0
  ) {
     const data = await getUserProfile();
     console.log("This user login to app", data);
     user = data;
  }

  return user;
}