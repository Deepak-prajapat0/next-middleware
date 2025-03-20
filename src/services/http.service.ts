import axios from 'axios';

const paramsSerializer = (params: any) => {
    return Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
};

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    paramsSerializer: paramsSerializer,
    withCredentials:true
});

instance.interceptors.request.use(
    (config: any) => {
        return config;
    },
);

instance.interceptors.response.use(
    (response: any) => {
        // const newToken = response?.headers['x-auth-token'] || response?.headers['X-Auth-Token']|| 'aa';
        if (response.status === 200 || response.status === 201) {
            return response;
        } else {
            const messages = response.data.messages;
            if (messages) {
                if (Array.isArray(messages)) {
                    return Promise.reject({ messages });
                }
                return Promise.reject({ messages: [messages] });
            }
            return Promise.reject({ messages: ["Something went wrong"] });
        }
    },
    (error:any) => {
        if (axios.isCancel(error)) {
            return Promise.resolve(); // Resolve the promise instead of rejecting it
        }

        if (error.response) {
            if (error?.response?.status === 401) {
                // localStorage.clear();
                // history.pushState(null, '', '/auth/login');
                return Promise.reject(error.response.data);
            } else if (error.response.status === 500) {
                return Promise.reject(error.response.data);
            } else {
                return Promise.reject(error.response.data);
            }
        } else {
            return Promise.reject({ messages: ["Network Error"] });
        }
    }
);

export const http = instance;

export default http;
