import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import QuestionList from './QuestionList'
import styles from '../ui.module.css'
import { base_URL } from '../../variables/vars'

const url_APIGet = `${base_URL}/game/quiz.questions_list?theme_id=1`

const Quiz = () => {
  const [isActive, setIsActive] = useState(false)
  const [questionsData, setQuestionsData] = useState({})
  const [click, setClick] = useState(0)

  const handleClick = async () => {
    try {
      const data = await axios.get(
        url_APIGet,
        { withCredentials: true },
        { crossDomain: true }
      )
      setQuestionsData(data.data.data.questions)
      setIsActive(true)
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }

  useEffect(() => {
    handleClick()
  }, [click])

  const handleClickToFetch = () => {
    setClick((prev) => prev + 1)
  }

  const handleClickThemes = () => {
    toast.info('Этот раздел ещё в разработке')
  }

  const isActiveToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={2000} />
      {isActive ? (
        <div>
          <button
            className={styles.back_to_menu_btn}
            type="button"
            onClick={isActiveToggle}
          >
            Назад
          </button>
          <QuestionList
            reFetch={handleClickToFetch}
            questionsData={questionsData}
          />
        </div>
      ) : (
        <div className={styles.quiz_container}>
          <ToastContainer position="bottom-right" autoClose={3000} />
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
