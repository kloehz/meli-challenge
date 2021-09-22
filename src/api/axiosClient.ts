import axios, { AxiosInstance } from "axios";

export const axiosClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:9000/api'
});