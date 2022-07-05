import axios from "axios";
import { LoginUserI, RegisterUserI } from "../interfaces/IAuth";

const api = axios.create({
    baseURL: "http://localhost:3001"
  });

export const registerUser = async(dataI: RegisterUserI) => {
    const {data} = await api.post("/auth/register", dataI);
    return data;
}
export const loginUser = async(dataI: LoginUserI |any) => {
    const {data} = await api.post("/auth/login", dataI);
    localStorage.setItem("UserCredentails", dataI);
    return data;
}

export const logoutUser = async() => {
    localStorage.removeItem("UserCredentails");
}