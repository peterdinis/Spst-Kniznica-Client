import axios from "axios";
import {ICategory} from "../interfaces/ICategory";

const api = axios.create({
  baseURL: "http://localhost:3333/api"
});

export const addNewCategory = async(category: ICategory) => {
    const {data} = await api.post("/Category/", category);
    return data;
}

export const updateCategory = async(id?: any, category?: ICategory) =>{
  const {data} = await api.post(`/Category/${id}`, category);
  return data;
}

export const deleteCategory = async(id: any) =>{
    const {data} = await api.delete<any>(`/Category/${id}`);
    return data;
}