import { useState, useEffect } from 'react'
import axios from 'axios'
import { base_URL } from '../../../variables/vars'
import BlitzTheme from './BlitzTheme'
import styles from '../../ui.module.css'

const BlitzQuestionsList = () => {
  const [themesData, setThemesData] = useState({})
  const [isActive, setIsActive] = useState(false)

  const handleClickThemes = async () => {
    try {
      const data = await axios.get(`${base_URL}/game/blitz.themes_list`)
      setThemesData(data.data.data.themes)
      setIsActive(!isActive)
      console.log(themesData)
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
      {isActive && <div>ХУЙ</div>}
    </div>
  )
}

export default BlitzQuestionsList

/*
      {!isActive && (
        <div>
          {themesData.map((theme) => (
            <BlitzTheme
              key={theme.id}
              {...theme}
            />
          ))}
        </div>
      )}
        */
