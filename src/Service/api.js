import axios from 'axios';

const chutelSalApi = axios.create({
    baseURL: "http://18.231.112.44:8080/"
});

export default chutelSalApi;