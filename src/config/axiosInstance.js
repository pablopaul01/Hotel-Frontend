import axios from 'axios';

export const axiosInstance = axios.create({
    // baseURL: "https://rollin-hotelapi.onrender.com"
    baseURL: "http://localhost:8080"
})