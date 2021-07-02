import axios from 'axios'
export const instanceAxios = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 
    'https://blog-programming.herokuapp.com/api/' : 
    'http://localhost:9000/api/',
    timeout: 20000,
    withCredentials: true
});
