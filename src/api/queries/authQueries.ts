import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001"
});

export const me = (token: string) => api.get('/users/me', {
    withCredentials: true,
    headers: {
        'Authorization': 'Bearer ' + token
    }
})