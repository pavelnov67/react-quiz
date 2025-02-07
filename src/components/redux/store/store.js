import { combineReducers, configureStore } from '@reduxjs/toolkit'
import themeReducer from './reducers/BlitzThemeSlise'
import quizQuestionsReducer from './reducers/QuizQuestionsSlice'

const rootReducer = combineReducers({
  themeReducer,
  quizQuestionsReducer,
})

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
