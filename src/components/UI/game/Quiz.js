import { useState, useEffect } from 'react'
import axios from 'axios'
import Question from './Question'
import styles from '../ui.module.css'
import { base_URL } from '../../authorization/auth'

const url_APIGet = `${base_URL}/quiz.questions_list?theme_id=1`

const Quiz = (props) => {
  const [isActive, setIsActive] = useState(false)
  const [questionsData, setQuestionsData] = useState({})

  useEffect(() => {
    ;(async function () {
      try {
        const data = await axios.get(url_APIGet)
        setQuestionsData(data.data.data.questions)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [isActive])

  const handleClick = () => {
    setIsActive(true)
  }

  return (
    <>
      {isActive ? (
        <Question questionsData={questionsData} />
      ) : (
        <div className={styles.quiz_container}>
          <button
            className={styles.start_quiz_btn}
            type="button"
            onClick={handleClick}
          >
            Получить список вопросов
          </button>
        </div>
      )}
    </>
  )
}

export default Quiz
