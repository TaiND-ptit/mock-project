import axios, { AxiosInstance } from 'axios';

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://dung.fresher.ameladev.click/api/',
      timeout: 10000,
      headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
        // 'Content-Type': 'application/json',
      }
    });
  }
}

const http = new Http().instance;

export default http;
