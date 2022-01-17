import axios from 'axios'

const serverUrl = 'http://127.0.0.1:8000/'

const apiPublic = axios.create({
    baseURL: serverUrl
})

export {apiPublic}