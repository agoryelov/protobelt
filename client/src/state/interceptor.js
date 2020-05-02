import axios from "axios"

const axiosWithAuth = axios.create()
axiosWithAuth.interceptors.request.use(config => {
    const token = localStorage.getItem("PROTONEKOT");
    config.headers.Authorization = `${token}`;
    return config;
})

export default axiosWithAuth