import axios from "axios";
import {ICategory} from "../interfaces/ICategory";

const api = axios.create({
  baseURL: "http://localhost:3001"
});