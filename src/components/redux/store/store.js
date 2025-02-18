import { combineReducers, configureStore } from '@reduxjs/toolkit'
import themeReducer from './reducers/BlitzThemeSlise'
import quizQuestionsReducer from './reducers/QuizQuestionsSlice'
import { addQuestionAPI } from './reducers/AddQuestionServce'

const rootReducer = combineReducers({
  themeReducer,
  quizQuestionsReducer,
  [addQuestionAPI.reducerPath]: addQuestionAPI.reducer,
})

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(addQuestionAPI.middleware),
  })
}
