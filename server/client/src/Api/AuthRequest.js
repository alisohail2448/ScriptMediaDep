import axios from "axios";

const API = axios.create({baseURL:"https://sohil-social.herokuapp.com"})

export const LogIn = (formData) => API.post('/auth/login', formData)
export const SignUp = (formData) => API.post('/auth/register', formData)