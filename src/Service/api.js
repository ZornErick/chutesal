import axios from 'axios';

const chutelSalApi = axios.create({
    baseURL: "http://52.67.161.45:8080"
});

export default chutelSalApi;