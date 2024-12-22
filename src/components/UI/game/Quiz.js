import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import Question from './Question'
import styles from '../ui.module.css'
import { base_URL } from '../../authorization/Auth'

const url_APIGet = `${base_URL}/quiz.questions_list?theme_id=1`

const Quiz = () => {
  const [isActive, setIsActive] = useState(false)
  const [questionsData, setQuestionsData] = useState({})

  const handleClick = async () => {
    try {
      const data = await axios.get(url_APIGet)
      setQuestionsData(data.data.data.questions)
      setIsActive(true)
    } catch (e) {
      console.log(e)
    }
  }

  const handleClickThemes = () => {
    toast.info('Этот раздел ещё в разработке')
  }

  const isActiveToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      {isActive ? (
        <div>
          <button
            className={styles.back_to_menu_btn}
            type="button"
            onClick={isActiveToggle}
          >
            Назад
          </button>
          <Question questionsData={questionsData} />
        </div>
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
