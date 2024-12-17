import createServerVariables from "../server";
import axios from "axios";

// Tip: Extract main private keys within the .env.local file
const variables = createServerVariables();

// Tip: Instance used to do HTTP Requests (e.g. REST API calls)
const axiosInstance = axios.create({
  baseURL: variables.DATABASE_URL,
  timeout: 10000, // 10 seconds
});

// Tip: Instance used to do the register and login of the user
const authInstance = axios.create({
  baseURL: variables.FIREBASE_API_URL,
  timeout: 10000, // 10 seconds
  params: {
    key: variables.FIREBASE_API_KEY,
  },
});

// Tip: Interceptor for authorization
axiosInstance.interceptors.request.use(
  (config) => {
    const idToken = localStorage.getItem("id_token");

    if (idToken) {
      config.params = { ...config.params, auth: idToken }; // ?auth=<idToken>
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance, authInstance };
