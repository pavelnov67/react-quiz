import { createSlice, createAction } from '@reduxjs/toolkit'
import { fetchThemes } from '../actionCreators/actionCreators'

const fulfilled = createAction(fetchThemes.fulfilled)
const pending = createAction(fetchThemes.pending)
const rejected = createAction(fetchThemes.rejected)

const initialState = {
  themes: [],
  isLoading: false,
  error: '',
}

export const blitzThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fulfilled, (state, action) => {
        state.isLoading = false
        state.error = ''
        state.themes = action.payload
      })
      .addCase(pending, (state) => {
        state.isLoading = true
      })
      .addCase(rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
      })
  },
})

export default blitzThemeSlice.reducer
