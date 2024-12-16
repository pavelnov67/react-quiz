import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Auth from './components/authorization/auth'
import MainLayout from './components/UI/adminPage/MainLayout'
import Quiz from './components/UI/Quiz'
import AddQuestionPage from './components/UI/adminPage/AddQuestionPage'
import NotFound from './components/UI/NotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Auth />}
          />
          <Route
            path="main_layout"
            element={<MainLayout />}
          >
            <Route
              path="quiz"
              element={<Quiz />}
            />
            <Route
              path="add_question_page"
              element={<AddQuestionPage />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
