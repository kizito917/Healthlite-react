import axios from 'axios';
const instance = axios.create({baseURL: 'https://612b668c22bb490017893b1d.mockapi.io/health/v1'});
instance.defaults.headers.common['Content-Type'] = 'application/json';
export default instance;