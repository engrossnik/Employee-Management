import axios from "axios"
//pass new generated access token here
const token = localStorage.getItem("accessToken");

//apply base url for axios
const API_URL = process.env.REACT_APP_MAHARISHIAYURVEDA_API_URL;

const axiosApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-type': 'application/json',
    }
})

axiosApi.defaults.headers.common["Authorization"] = token

axiosApi.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
)

export async function get(url, config = {}) {
    return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
    return axiosApi
        .post(url, data, config)
        .then(response => response.data).catch(error => error.response.data)
}

export async function update(url, data, config = {}) {
    return axiosApi
        .put(url, { ...data }, { ...config })
        .then(response => response.data).catch(error => error.response.data)
}

export async function del(url, config = {}) {
    return await axiosApi
        .delete(url, { ...config })
        .then(response => response.data)
}

