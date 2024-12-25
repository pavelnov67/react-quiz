import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Auth from './components/authorization/Auth'
import MainLayout from './components/MainLayout'
import QuizMenu from './components/UI/game/QuizMenu'
import AddQuestionPage from './components/UI/adminPage/AddQuestionPage'
import ActiveGames from './components/UI/adminPage/ActiveGames'
import BlitzQuestionsList from './components/UI/game/blitz/BlitzQuestionsList'
import NotFound from './components/NotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="main_layout" element={<MainLayout />}>
            <Route path="quiz" element={<QuizMenu />} />
            <Route path="active_games" element={<ActiveGames />} />
            <Route path="add_question_page" element={<AddQuestionPage />} />
            <Route path="blitz" element={<BlitzQuestionsList />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
