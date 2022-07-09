import axios from "axios";
import {LoginUserI, RegisterUserI } from "../interfaces/IAuth";
import storage from "../utils/storage";

const api = axios.create({
    baseURL: "http://localhost:3001"
  });

export const registerUser = async(dataI: RegisterUserI) => {
    const {data} = await api.post("/users/register", dataI);
    return data;
}

export const loginUser = async(dataI: LoginUserI) => {
    const {data} = await api.post("/users/login", dataI);
    await storage.setToken(data.token);
    return data;
}


export const logoutUser = async() => {
    await storage.clearToken();
    localStorage.removeItem("token")
}