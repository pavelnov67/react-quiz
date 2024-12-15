import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Auth from './components/authorization/auth'
import Quiz from './components/UI/Quiz'
import AdminPage from './components/UI/adminPage/AdminPage'
import NotFound from './components/UI/NotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            index={true}
            element={<Auth />}
          />
          <Route
            path="quiz"
            element={<Quiz />}
          />
          <Route
            path="admin_page"
            element={<AdminPage />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
