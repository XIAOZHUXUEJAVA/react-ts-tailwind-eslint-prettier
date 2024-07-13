import React, { useEffect, useState } from 'react'
import { UserData } from './UserData'
import User from './User'
import Loading from './Loading'

const GithubProfileFinder: React.FC = () => {
  const [userName, setUserName] = useState<string>('XIAOZHUXUEJAVA')
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const fecthGithubUserData = async () => {
    setLoading(true)
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()
    if (data) {
      const filterUserData: UserData = {
        avatar_url: data.avatar_url,
        followers: data.followers,
        following: data.following,
        public_repos: data.public_repos,
        name: data.name,
        login: data.login,
        created_at: data.created_at
      }
      setUserData(filterUserData)
      setLoading(false)
    }
  }

  useEffect(() => {
    fecthGithubUserData()
  }, [])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center p-4">
          <div className="mb-4 flex flex-col items-center w-full max-w-md">
            <input
              name="search-by-username"
              type="text"
              placeholder="Please input username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full mb-2 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={fecthGithubUserData}
              className="px-4 py-2 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600 transition duration-200"
            >
              Search
            </button>
          </div>
          <div>
            {userData ? (
              <User user={userData} />
            ) : (
              <p className="text-red-500 text-center">The User was not found!!!!</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default GithubProfileFinder
