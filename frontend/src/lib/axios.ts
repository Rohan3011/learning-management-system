import axios from "axios";

export const API = axios.create();

const AUTH_TOKEN = import.meta.env.VITE_API_TOKEN;

axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
