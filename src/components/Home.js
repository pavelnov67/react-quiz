import { Outlet } from 'react-router-dom'
import Menu from './Menu'

const Home = (props) => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default Home
