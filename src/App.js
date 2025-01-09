import { Route, Routes } from 'react-router-dom'
import Auth from './components/authorization/Auth'
import MainLayout from './components/MainLayout'
import QuizMenu from './components/UI/game/100-1/QuizMenu'
import AddQuestionPage from './components/UI/game/100-1/AddQuestionPage'
import ActiveGames from './components/UI/game/100-1/ActiveGames'
import BlitzThemesContainer from './components/UI/game/blitz/BlitzThemesContainer'
import BlitzAddTheme from './components/UI/game/blitz/BlitzAddTheme'
import BlitzContainer from './components/UI/game/blitz/BlitzContainer'
import ConversationsContainer from './components/UI/game/conversations/ConversationsContainer'
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
          <Route
            path="blitz_themes_container"
            element={<BlitzThemesContainer />}
          />
          <Route path="blitz_add_theme" element={<BlitzAddTheme />} />
          <Route path="blitz_add_question" element={<BlitzContainer />} />
          <Route path="conversations" element={<ConversationsContainer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
