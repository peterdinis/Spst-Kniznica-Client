import axios from "axios";
import {RegisterUserI } from "../interfaces/IAuth";

const api = axios.create({
    baseURL: "http://localhost:3001"
  });

export const registerUser = async(dataI: RegisterUserI) => {
    const {data} = await api.post("/users/register", dataI);
    return data;
}