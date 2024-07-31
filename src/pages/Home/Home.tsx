import Button from '../../components/Button'

const Home: React.FC = () => {
  const homeButtonClick = () => {
    window.alert('Home Button Click')
  }

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1>Home</h1>
      </div>
      <div>
        <Button disabled={false} text={'Home Button'} onClick={homeButtonClick}></Button>
      </div>
    </div>
  )
}
export default Home
