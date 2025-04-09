import { useState, useContext } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { fetchThemes } from '../../../redux/store/actionCreators/actionCreators'
import { base_URL } from '../../../variables/vars'
import styles from './blitz.module.css'
import BlitzQuestionsContainer from './BlitzQuestionsContainer'
import Pagination from '../../UIcomponents/Pagination'
import OffsetContext from './context/OffsetContext'
import BlitzAddQuestion from './BlitzAddQuestion'

const BlitzThemeItemContainer = ({ id, title, description, reFetchThemes }) => {
  const [questionData, setQuestionData] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [questionsCount, setQuestionsCount] = useState(null)
  const dataLimit = 5 // Количество вопросов на странице
  const { offset, setOffset } = useContext(OffsetContext)

  const dispatch = useDispatch()

  const fetchTotalQuestionsCount = async (id) => {
    const fetchQuestionsCount = await axios.get(
      `${base_URL}/game//blitz.questions_count`,
      {
        params: {
          theme_id: id,
        },
      }
    )
    setQuestionsCount(fetchQuestionsCount.data.data.questions_count)
  }

  const fetchQuestionsData = async (id, offset) => {
    fetchTotalQuestionsCount(id)
    try {
      const data = await axios.get(`${base_URL}/game/blitz.questions_list`, {
        params: {
          theme_id: id,
          limit: dataLimit,
          offset: offset,
        },
      })
      setQuestionData(data.data.data.questions)
      window.scrollTo(0, 0)
    } catch (err) {
      if (err.response?.status === 404) {
        toast.error('В данной теме нет вопросов')
      } else {
        toast.error(err.message)
      }
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
      dispatch(fetchThemes())
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }

  const handleIsActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={styles.blitz_container}>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <div className={styles.blitz_container}>
        {isActive ? (
          <>
            <BlitzQuestionsContainer
              questionData={questionData}
              themeId={id}
              title={title}
            />
            <Pagination
              id={id}
              dataLimit={dataLimit}
              questionsCount={questionsCount}
              paginate={fetchQuestionsData}
            />
            <BlitzAddQuestion id={id} />
          </>
        ) : (
          <div className={styles.theme_item_container}>
            <div className={styles.blitz_theme_container}>
              <h3>
                Тема №{id}: {title}
              </h3>
              <p>Описание: {description}</p>
              <div className={styles.theme_item_btns_container}>
                <button
                  className={styles.edit_btn}
                  type="button"
                  onClick={() => {
                    fetchQuestionsData(id)
                    setIsActive(!isActive)
                  }}
                >
                  Редактировать
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
      {isActive && (
        <div className={styles.theme_item_btns_container}>
          <button
            className={styles.start_quiz_btn}
            type="button"
            onClick={() => handleIsActive(id)}
          >
            Назад к темам
          </button>
        </div>
      )}
    </div>
  )
}

export default BlitzThemeItemContainer
