import axios from 'axios';

export const campersAPI = axios.create({
  baseURL: 'https://661c2ffee7b95ad7fa69e56f.mockapi.io/adverts',
});
