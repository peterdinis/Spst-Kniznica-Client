import axios from "axios";
import {ICategory} from "../interfaces/ICategory";

const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const addNewCategory = async(category: ICategory) => {
    const {data} = await api.post("/category/", category);
    return data;
}

export const updateCategory = async(id?: any, category?: ICategory) =>{
  const {data} = await api.post(`/category/${id}`, category);
  return data;
}

export const deleteCategory = async(id: any) =>{
    const {data} = await api.delete<any>(`/category/${id}`);
    return data;
}