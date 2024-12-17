import { configs } from 'eslint-plugin-react';
import createServerVariables from './serverVariables';
import axios from 'axios';

const variables = createServerVariables();

const axiosInstance = axios.create({
    baseURL: variables.DATABASE_URL,
    timeout: 1000,
});


axiosInstance.interceptors.request.use(
    (config) => {
        const idToken = localStorage.getItem('idToken');

        if (idToken) {
            config.params = { ...config.params, auth: idToken };
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
