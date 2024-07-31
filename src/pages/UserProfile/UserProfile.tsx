import { useEffect, useState } from 'react'
import { UserData } from '../../types'
import { getUserDataById } from '../../services/UserApi'

const UserProfile: React.FC<{ userId: string }> = ({ userId }) => {
  const [user, setUser] = useState<UserData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      console.log('Fetching user data...')
      try {
        const result = await getUserDataById(userId)
        console.log('userData', result)
        if (result !== null) {
          setUser(result)
        }
        setError(null) // 清除可能存在的错误
      } catch (error) {
        console.error('Error fetching user data:', error)
        setError('Failed to fetch user data')
        setUser(null)
      } finally {
        setLoading(false)
        console.log('Fetching user data complete.')
      }
    }
    fetchUser()
  }, [userId])

  console.log('Render:', { loading, error, user })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!user) {
    return <div>No user data</div>
  }

  // 确保在访问属性之前 user 已经定义
  return <div>{user.name}</div>
}

export default UserProfile
