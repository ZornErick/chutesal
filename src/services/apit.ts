import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

const apiInstance = axios.create({
    url,
    timeout: 5
})


export default apiInstance;