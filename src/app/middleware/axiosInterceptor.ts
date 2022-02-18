import axios from 'axios';

axios.defaults.timeout = 1000 * 60 * 2;

axios.interceptors.request.use(async function (config) {
    config.url = `${process.env["SIG_FOX_API_URL"]}${config.url}`
    console.log(config.url);
    return config;
}, function (error) {
    console.log('Error Request:', error);
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('Error Response:', error);
    //window.location.href = PageEnum.NO_PERMISSION;
    return Promise.reject(error);
});

export const httpClient = axios