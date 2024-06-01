import axios from "axios";

const domain = '127.0.0.1'
const port = '8000'

const address = 'http://'+domain+':'+port+'/api'

export const getAll = (url) => {
   return axios.get(address + url)
}

export const getSingle = (url) => {
    return axios.get(address + url)
}

export const deleteSingle = (url) => {
    return axios.delete(address + url)
}

export const postSIngle = (url, data) => {
    return axios.post(address + url, data)
}

export const updateSingle = (url, data) => {
    return axios.put(address + url, data)
}
