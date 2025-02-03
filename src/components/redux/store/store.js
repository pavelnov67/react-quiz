import { combineReducers, configureStore } from '@reduxjs/toolkit'
import themeReducer from './reducers/BlitzThemeSlise'

const rootReducer = combineReducers({
  themeReducer,
})

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
