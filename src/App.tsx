import Home from './pages/Home'
import UserProfile from './pages/UserProfile'

const App: React.FC = () => {
  const userId: string = '5'
  return (
    <>
      <div>
        <Home></Home>
        <UserProfile userId={userId}></UserProfile>
      </div>
    </>
  )
}

export default App
