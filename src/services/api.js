import axios from "axios";

// /26270230/json

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})

export default api;