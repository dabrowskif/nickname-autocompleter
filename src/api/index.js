import axios from 'axios';

// const API = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });
const API = axios.create({ baseURL: 'https://myfakeapi.com/api' });

// eslint-disable-next-line import/prefer-default-export
export const fetchNicknameList = () => API.get('/users');
