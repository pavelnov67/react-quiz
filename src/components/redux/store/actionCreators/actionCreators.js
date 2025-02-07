import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { base_URL } from '../../../variables/vars'

export const fetchThemes = createAsyncThunk(
  'theme/fetchViaAPI',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${base_URL}/game/blitz.themes_list`)
      return response.data.data.themes
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const fetchQuizQuestions = createAsyncThunk(
  'quizQuestions/fetchViaAPI',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${base_URL}/game/quiz.questions_list?theme_id=1`
      )
      return response.data.data.questions
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
