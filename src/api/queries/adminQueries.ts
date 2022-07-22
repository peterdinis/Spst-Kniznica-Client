import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001"
});


export const applicationStatus = () =>api.get("/health").then((res) => res.data);