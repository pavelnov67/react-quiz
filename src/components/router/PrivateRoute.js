import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const PrivateRoute = () => {
  const auth = useAuth()
  return auth ? <Outlet /> : <Navigate to="auth" />
}

export default PrivateRoute
