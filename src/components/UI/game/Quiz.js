import { useState } from 'react'
import Question from './Question'
import styles from '../ui.module.css'

const Quiz = (props) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(true)
  }

  return (
    <>
      {isActive ? (
        <Question />
      ) : (
        <div className={styles.quiz_container}>
          <button
            className={styles.start_quiz_btn}
            type="button"
            onClick={handleClick}
          >
            Начать игру
          </button>
        </div>
      )}
    </>
  )
}

export default Quiz
