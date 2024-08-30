import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ApiResponse } from '../types'
import createApiClient from './NewAxiosClient'

// 定义封装的接口
export interface FetchDataProps<R = undefined> {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' // 支持的 HTTP 方法
  endpoint: string // 请求的 URL
  data?: R // 可选的请求体数据
  config?: AxiosRequestConfig // 可选的 Axios 配置，允许自定义 headers 等
}

const apiClient = createApiClient()

export const fetchData = async <T, R = undefined>(
  props: FetchDataProps<R> // 使用封装好的接口
): Promise<ApiResponse<T>> => {
  const { method, endpoint, data, config } = props // 解构 props

  try {
    const methodMap: Record<
      typeof method,
      (url: string, data?: R, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
    > = {
      GET: (url, _, config) => apiClient.get<T>(url, config),
      POST: (url, data, config) => apiClient.post<T>(url, data, config),
      PUT: (url, data, config) => apiClient.put<T>(url, data, config),
      DELETE: (url, _, config) => apiClient.delete<T>(url, config)
    }

    const response: ApiResponse<T> = await methodMap[method](endpoint, data, config)
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText
    }
  } catch (exception) {
    const errorMessage = axios.isAxiosError(exception) ? exception.message : 'An unexpected error occurred'
    throw new Error(errorMessage)
  }
}
