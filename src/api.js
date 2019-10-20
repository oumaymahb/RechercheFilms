import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.tvmaze.com/`
});

api.interceptors.request.use(function (config) {

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  config.headers = headers;


  return config;
}, function (err) {
  console.log(err)
  return Promise.reject(err);
});

export default api;
