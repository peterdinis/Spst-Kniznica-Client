import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/api"
});

export const getCategories = () => api.get("/Category").then((res) => res.data);

export const getOneCategory = (id: any) => {
  if(!id) {
    return;
  }

  return api.get(`/Category/${id}`).then((res) => res.data);
}