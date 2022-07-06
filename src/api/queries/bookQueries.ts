import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const getBooks = () => api.get("/books").then((res) => res.data);

export const getOneBook = (id: any) => {
  if(!id) {
    return;
  }

  return api.get(`/books/${id}`).then((res) => res.data);
}