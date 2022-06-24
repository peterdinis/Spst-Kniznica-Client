import axios from "axios";
import {IBook} from "../interfaces/IBook";

const api = axios.create({
  baseURL: "http://localhost:3333/api"
});

export const addNewBook = async(book: IBook) => {
    const {data} = await api.post("/book/", book);
    return data;
}