import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3333/api"
  });

  
export const myBorrowedBooks = () => api.get("/borrwoing").then((res) => res.data);
