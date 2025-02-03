import { Route, Routes } from 'react-router-dom'
import Auth from './components/authorization/Auth'
import MainLayout from './components/MainLayout'
import GetQuestions from './components/UI/game/100-1/GetQuestions'
import AddQuestionPage from './components/UI/game/100-1/AddQuestionPage'
import ActiveGames from './components/UI/game/100-1/ActiveGames'
import BlitzThemesContainer from './components/UI/game/blitz/BlitzThemesContainer'
import BlitzAddTheme from './components/UI/game/blitz/BlitzAddTheme'
import BlitzFetchThemeContainer from './components/UI/game/blitz/BlitzFetchThemeContainer'
import ConversationsContainer from './components/UI/game/conversations/ConversationsContainer'
import NotFound from './components/NotFound'
import './App.css'
import Blitz from './components/UI/game/blitz/Blitz'
import Quiz from './components/UI/game/100-1/GetQuestions'
import GrouoControl from './components/UI/game/group control/GroupControl'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/auth"
          element={<Auth />}
        />
        <Route
          path="/"
          element={<MainLayout />}
        >
          <Route
            path="blitz"
            element={<Blitz />}
          >
            <Route
              path="blitz_add_theme"
              element={<BlitzAddTheme />}
            />
            <Route
              path="blitz_add_question"
              element={<BlitzFetchThemeContainer />}
            />
            <Route
              path="blitz_themes_container"
              element={<BlitzThemesContainer />}
            />
          </Route>

          <Route
            path="100-1"
            element={<Quiz />}
          >
            <Route
              path="active_games"
              element={<ActiveGames />}
            />
            <Route
              path="add_question_page"
              element={<AddQuestionPage />}
            />
          </Route>

          <Route
            path="group-control"
            element={<GrouoControl />}
          />

          <Route
            path="conversations"
            element={<ConversationsContainer />}
          />
        </Route>
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  )
}

export default App
