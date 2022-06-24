import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3333/api"
  });

  export const borrowBook = async(bookId: any, userId: any) => {
    const {data} = await api.post(`/borrowing/${bookId}/${userId}`);
    return data;
  }