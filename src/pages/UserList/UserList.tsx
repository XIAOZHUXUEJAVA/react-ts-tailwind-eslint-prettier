import React, { useEffect, useState } from 'react'
import { UserData } from '../../types'
import { fetchData } from '../../services/NewApi'

interface UserListProps {
  userId: string
}

const UserList: React.FC<UserListProps> = ({ userId }) => {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetchData<UserData>(`/users/${userId}`)
        setUser(response.data)
      } catch (error) {
        if (error instanceof Error) setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    getUser()
  }, [userId])
  if (loading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>Error: error</div>
  }
  if (user === null) {
    return <div>No User Data</div>
  }
  return (
    <div>
      <h1>UserList</h1>
      <h1>username: {user.name}</h1>
    </div>
  )
}

export default UserList
