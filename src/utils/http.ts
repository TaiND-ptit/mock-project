import axios, { AxiosInstance } from 'axios';

class Http {
    instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://dung.fresher.ameladev.click/api/',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
}

const http = new Http().instance;

export default http;