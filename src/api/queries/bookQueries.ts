import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/api"
});

export const getBooks = () => api.get("/book").then((res) => res.data);

export const getOneBook = (id: any) => {
  if(!id) {
    return;
  }

  return api.get(`/book/${id}`).then((res) => res.data);
}