import axios from "axios";
import API from '../config/axiosConfig';

const PREFIX_URL = "http://localhost:8000/series/api/v1/categories/";

export const getAllCategoryService = async ()=>{
    const response = await API.get(PREFIX_URL);
    return response;
}