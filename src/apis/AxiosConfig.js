import axios from 'axios';
const _axios = axios.create();
_axios.defaults.baseURL = 'http://localhost:4000';


_axios.defaults.headers.common['Authorization'] = 'Bearer tXZFVTbtqM1hYqM5RFQb2Pl5NPN7uE9hAedkI/z2kJHDsdUD9DkN1hkqBOdB0v7XxCBQn1hfAkpWxpUa0duO+w==';
_axios.defaults.headers.common['Content-Type'] = 'application/json';
_axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



_axios.interceptors.request.use((request) => {
  window.console.log('Request', JSON.stringify(request, null, 2))
  return request
})

_axios.interceptors.response.use((response) => {
  window.console.log('Response:', JSON.stringify(response, null, 2))
  return response
})

export default _axios;
