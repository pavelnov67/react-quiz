import { useState, useEffect } from 'react'
import axios from 'axios'
import { base_URL } from '../../../variables/vars'
import BlitzTheme from './BlitzTheme'
import styles from '../../ui.module.css'

const BlitzQuestionsList = () => {
  const [themesData, setThemesData] = useState([])

  const handleClickThemes = async () => {
    try {
      const data = await axios.get(`${base_URL}/game/blitz.themes_list`)
      setThemesData(data.data.data.themes)
    } catch (e) {
      console.log(e)
    }
  }
  if (themesData) {
    console.log(themesData)
  }

  return (
    <div className={styles.blitz_container}>
      <button
        className={styles.start_quiz_btn}
        type="button"
        onClick={handleClickThemes}
      >
        Отобразить список вопросов
      </button>
      <div>
        {themesData.map((theme) => (
          <BlitzTheme
            key={theme.id}
            {...theme}
          />
        ))}
      </div>
    </div>
  )
}

export default BlitzQuestionsList
