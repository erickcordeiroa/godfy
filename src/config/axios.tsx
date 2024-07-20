import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const api = axios.create({
  baseURL: 'http://godfy.greentruck.global/',
  headers: { 'Accept': 'application/json' },
});

export default api;