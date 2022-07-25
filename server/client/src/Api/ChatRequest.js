import axios from "axios";

const API = axios.create({baseURL:"https://sohil-social.herokuapp.com"});


export const userChats = (id) => API.get(`/chat/${id}`);
// export const makeChats = (data) => API.post('/chat/', data);