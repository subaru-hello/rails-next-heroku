import axios from "axios";

export const axiosInstance = axios.create();
// axiosInstance.defaults.baseURL = process.env.REACT_APP_API_DOMEIN;
axiosInstance.defaults.baseURL = "https://todo202305142200.herokuapp.com"