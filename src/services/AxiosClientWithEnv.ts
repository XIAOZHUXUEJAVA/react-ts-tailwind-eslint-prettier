import axios, { AxiosInstance } from 'axios'

// 从环境变量中获取 baseURL，设置默认值
const defaultBaseURL: string = process.env.REACT_APP_USER_API || 'https://jsonplaceholder.typicode.com'

// 定义参数类型，确保 baseURL 是一个可选的字符串
interface CreateApiClientOptions {
  baseURL?: string
}

// 创建一个 API 客户端的工厂函数
const createApiClient = ({ baseURL = defaultBaseURL }: CreateApiClientOptions = {}): AxiosInstance => {
  return axios.create({
    baseURL, // 使用传入的 baseURL 或默认值
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export default createApiClient
