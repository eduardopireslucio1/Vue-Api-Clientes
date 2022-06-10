import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://facec-webapi-2022.herokuapp.com/'
})