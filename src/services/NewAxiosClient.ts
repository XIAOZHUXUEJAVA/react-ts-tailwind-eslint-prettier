import axios, { AxiosInstance } from 'axios'

const createApiClient = (): AxiosInstance => {
  return axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
export default createApiClient
