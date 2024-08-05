import axios from 'axios'
import { ApiResponse } from '../types'
import createApiClient from './NewAxiosClient'

const apiClient = createApiClient()

// First 'T' defines the function as a generic function
// Returns a 'Promise' of type 'ApiResponse<T>'
export const fetchData = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  try {
    // Sends a GET request to the specified endpoint and expects a response of type T
    const response = await apiClient.get<T>(endpoint)
    // Destructures the response object to extract data, status, and statusText
    const { data, status, statusText } = response
    // Constructs a result object of type 'ApiResponse<T>'
    const result: ApiResponse<T> = { data, status, statusText }
    // If the status is 200 (OK), return the result
    if (status === 200) {
      return result
    } else {
      // If the status is not 200, throw an error with the statusText
      throw new Error(`Request failed with status: ${status} - ${statusText}`)
    }
  } catch (Exception) {
    // Handles axios-specific errors
    if (axios.isAxiosError(Exception)) {
      throw new Error(Exception.message)
    } else {
      // Handles any other unexpected errors
      throw new Error('An unexpected error occurred')
    }
  }
}
