import axios from 'axios'

export default axios.create({
    baseURL: "http://192.168.0.195:8080",
    headers: {
        "Content-Type": "application/json"
    }
})