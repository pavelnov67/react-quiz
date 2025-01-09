import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { base_URL } from '../../../variables/vars'
import styles from '../../ui.module.css'
import BlitzQuestionsContainer from './BlitzQuestionsContainer'

const BlitzThemeItemContainer = ({ id, title, description, reFetchThemes }) => {
  const [questionData, setQuestionData] = useState([])
  const [isActive, setIsActive] = useState(false)

  const fetchQuestionsData = async (id) => {
    try {
      const data = await axios.get(
        `${base_URL}/game/blitz.questions_list?theme_id=${id}`
      )
      setQuestionData(data.data.data.questions)
      setIsActive(!isActive)
    } catch (err) {
      if (err.status === 404) {
        toast.error('В данной теме нет вопросов')
      } else toast.error(err.message)
    }
  }

  const handleDelete = async (id) => {
    const instance = axios.create({
      timeout: 5000,
      headers: {
        accept: 'application/json',
      },
    })
    try {
      await instance.delete(
        `${base_URL}/game/blitz.themes_delete_by_id?theme_id=${id}`
      )
      reFetchThemes((i) => i++)
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }

  const handleIsActive = (id) => {
    setIsActive(!isActive)
  }

  return (
    <div className={styles.blitz_container}>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <div className={styles.blitz_container}>
        {isActive ? (
          <BlitzQuestionsContainer
            questionData={questionData}
            reFetchQuestions={fetchQuestionsData}
            themeId={id}
          />
        ) : (
          <div className={styles.theme_item_container}>
            <div className={styles.blitz_theme_container}>
              <h3>
                Тема №{id}: {title}
              </h3>
              <p>Описание: {description}</p>
              <div className={styles.theme_item_btns_container}>
                <button
                  className={styles.show_questions_btn}
                  type="button"
                  onClick={() => fetchQuestionsData(id)}
                >
                  Показать вопросы
                </button>
                <button
                  className={styles.delete_btn}
                  type="button"
                  onClick={() => handleDelete(id)}
                >
                  Удалить тему
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {isActive ? (
        <button
          className={styles.start_quiz_btn}
          type="button"
          onClick={handleIsActive}
        >
          Назад к теме
        </button>
      ) : (
        ''
      )}
    </div>
  )
}

export default BlitzThemeItemContainer
