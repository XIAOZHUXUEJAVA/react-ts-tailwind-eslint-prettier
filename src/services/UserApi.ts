import axios from 'axios'
import { UserData } from '../types'
import createApiClient from './axiosClient'

const baseURL = 'https://jsonplaceholder.typicode.com'
const userApiClient = createApiClient(baseURL)

export const getUserDataById = async (userId: string): Promise<UserData> => {
  try {
    // Adjust response type to ApiResponse<UserData>
    const response = await userApiClient.get(`/users/${userId}`)
    return response.data
  } catch (Exception) {
    if (axios.isAxiosError(Exception)) {
      throw new Error(Exception.message)
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}
