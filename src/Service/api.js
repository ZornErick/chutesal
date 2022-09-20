import axios from 'axios';

const chutelSalApi = axios.create({
    baseURL: "http://ec2-18-230-199-64.sa-east-1.compute.amazonaws.com:8080"
});

export default chutelSalApi;