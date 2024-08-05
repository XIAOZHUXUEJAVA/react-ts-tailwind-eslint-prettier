// import Home from './pages/Home'
// import UserProfile from './pages/UserProfile'
import UserList from './pages/UserList'

const App: React.FC = () => {
  const userId: string = '5'
  return (
    <>
      <div>
        {/* <Home></Home> */}
        {/* <UserProfile userId={userId}></UserProfile> */}
        <UserList userId={userId}></UserList>
      </div>
    </>
  )
}

export default App
