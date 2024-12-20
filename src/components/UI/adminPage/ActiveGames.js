import { useState } from 'react'
import styles from '../ui.module.css'
import ActiveGamesPanel from './ActiveGamesPanel'

const ActiveGames = () => {
  const [isActive, setIsActive] = useState(false)

  const isActiveToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      {isActive ? (
        <div>
          <button
            className={styles.start_quiz_btn}
            type="button"
            onClick={isActiveToggle}
          >
            Назад
          </button>
          <ActiveGamesPanel />
        </div>
      ) : (
        <div className={styles.quiz_container}>
          <button
            className={styles.start_quiz_btn}
            type="button"
            onClick={isActiveToggle}
          >
            Показать активные игры
          </button>
        </div>
      )}
    </>
  )
}

export default ActiveGames
