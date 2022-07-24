import axios from "axios";

const API = axios.create({baseURL:"http://localhost:8080"})

export const LogIn = (formData) => API.post('/auth/login', formData)
export const SignUp = (formData) => API.post('/auth/register', formData)