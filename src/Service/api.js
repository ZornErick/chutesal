import axios from 'axios';

const chutelSalApi = axios.create({
    baseURL: "http://54.233.246.12:8080"
});

export default chutelSalApi;