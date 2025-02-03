import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { base_URL } from '../../../variables/vars'

export const fetchThemes = createAsyncThunk(
  'theme/fetchViaAPI',
  async (_, thunkAPI) => {
    const response = await axios.get(`${base_URL}/game/blitz.themes_list`)
    return response.data.data.themes
  }
)
