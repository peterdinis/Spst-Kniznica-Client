import axios from "axios";
import {IBook} from "../interfaces/IBook";

const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const addNewBook = async(book: IBook) => {
    const {data} = await api.post("/books/", book);
    return data;
}