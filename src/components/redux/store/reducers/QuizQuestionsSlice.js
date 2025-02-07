import { createSlice, createAction } from '@reduxjs/toolkit'
import { fetchQuizQuestions } from '../actionCreators/actionCreators'

const fulfilled = createAction(fetchQuizQuestions.fulfilled)
const pending = createAction(fetchQuizQuestions.pending)
const rejected = createAction(fetchQuizQuestions.rejected)

const initialState = {
  quizQuestions: [],
  isLoading: false,
  error: '',
}

export const quizQuestionsSlice = createSlice({
  name: 'quizQuestions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fulfilled, (state, action) => {
        state.isLoading = false
        state.error = ''
        state.quizQuestions = action.payload
      })
      .addCase(pending, (state) => {
        state.isLoading = true
      })
      .addCase(rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export default quizQuestionsSlice.reducer
