import axios from "axios"
//pass new generated access token here
const token = localStorage.getItem("accessToken");

//apply base url for axios
const API_URL = process.env.REACT_APP_EMS_API_URL;

const axiosApi = axios.create({
    baseURL: "http://localhost:1337/api/",
    headers: {
        'Content-type': 'application/json',
    }
})

axiosApi.defaults.headers.common["Authorization"] = "Bearer 47f8355a5299cdc154751c796b655b6a1e2e527dd7dfd0d83374e2670ede81b6591ef410a40038bddf012601eb55c650ec96681b866f51c4324477379311de220057791cf98b669805641fd9822000dd655ae113fb115e52262429a1c1e40955f87649a0f696531ac40682e797c67131658a5bee56a71a2619a3584580b5805a"

axiosApi.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
)

export async function get(url, config = {}) {
    return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
    debugger;
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

