import { useLocation } from 'react-router-dom'
import Auth from './authorization/Auth'

const RootComponent = () => {
  const location = useLocation()
  return (
    <div className="root">
      <div className="form">
        {location.pathname === '/auth' ? <Auth /> : null}
      </div>
    </div>
  )
}

export default RootComponent
