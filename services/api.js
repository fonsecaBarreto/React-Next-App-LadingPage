
import axios from 'axios'

//export const api = axios.create({baseURL:'http://localhost:9000/api/v2'})
export const api = axios.create({baseURL:'https://api2.mathewslins.com/api/v2'})
export const legacyApi = axios.create({baseURL:'https://api.mathewslins.com'})

export default api;
