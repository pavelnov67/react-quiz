import { Route, Routes } from 'react-router-dom'
import Auth from './components/authorization/Auth'
import MainLayout from './components/MainLayout'
import QuizMenu from './components/UI/game/QuizMenu'
import AddQuestionPage from './components/UI/adminPage/AddQuestionPage'
import ActiveGames from './components/UI/adminPage/ActiveGames'
import BlitzQuestionsList from './components/UI/game/blitz/BlitzQuestionsList'
import BlitzAddTheme from './components/UI/game/blitz/BlitzAddTheme'
import BlitzAddQuestion from './components/UI/game/blitz/BlitzAddQuestion'

import NotFound from './components/NotFound'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="quiz" element={<QuizMenu />} />
          <Route path="active_games" element={<ActiveGames />} />
          <Route path="add_question_page" element={<AddQuestionPage />} />
          <Route path="blitz" element={<BlitzQuestionsList />} />
          <Route path="blitz_add_theme" element={<BlitzAddTheme />} />
          <Route path="blitz_add_question" element={<BlitzAddQuestion />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
