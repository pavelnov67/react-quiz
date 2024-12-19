import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
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

  const handleClickThemes = () => {
    toast.info('Этот раздел ещё в разработке')
  }

  return (
    <>
      {isActive ? (
        <Question questionsData={questionsData} />
      ) : (
        <div className={styles.quiz_container}>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
          />
          <button
            className={styles.start_quiz_btn}
            type="button"
            onClick={handleClick}
          >
            Получить список вопросов
          </button>
          <button
            className={styles.start_quiz_btn}
            type="button"
            onClick={handleClickThemes}
          >
            Получить список тем
          </button>
        </div>
      )}
    </>
  )
}

export default Quiz
