import axios from 'axios'
export const instanceAxios = axios.create({
    baseURL: 'http://localhost:9999/api',
    timeout: 5000,
    withCredentials: true
});
