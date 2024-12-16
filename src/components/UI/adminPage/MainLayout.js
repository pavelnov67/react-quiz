import { Outlet } from 'react-router-dom'
import Menu from './Menu'

const MainLayout = (props) => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default MainLayout
