import React, { useEffect, useState } from 'react'
import { UserData } from '../../types'
import { fetchData } from '../../services/NewApiWithEnv'

interface UserListProps {
  userId: string
}

const UserList: React.FC<UserListProps> = ({ userId }) => {
  const [user, setUser] = useState<UserData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetchData<UserData>({
          method: 'GET',
          endpoint: `/users/${userId}` // 使用 userId 构建请求 URL
        })
        setUser(response.data)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unexpected error occurred')
      }
    }

    getUser()
  }, [userId])

  if (error) return <div>Error: {error}</div>
  if (!user) return <div>Loading...</div>

  return (
    <div>
      <h2>User Information</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
    </div>
  )
}

export default UserList
