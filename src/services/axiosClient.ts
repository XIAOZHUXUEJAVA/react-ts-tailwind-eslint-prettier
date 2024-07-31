import axios, { AxiosInstance } from 'axios'

const createApiClient = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
export default createApiClient
