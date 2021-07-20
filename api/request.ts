import axios, { AxiosInstance } from "axios";

export const request: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.API_KEY,
    "x-rapidapi-host": process.env.API_HOST,
  },
});
