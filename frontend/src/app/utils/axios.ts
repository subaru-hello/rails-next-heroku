import axios from "axios";

export const axiosInstance = axios.create();
// axiosInstance.defaults.baseURL = process.env.REACT_APP_API_DOMEIN;
// axiosInstance.defaults.baseURL = "https://rails-next-heroku-lwuoc6jsw-subaru-hello.vercel.app"
axiosInstance.defaults.baseURL = "https://todo202305142200.herokuapp.com/"