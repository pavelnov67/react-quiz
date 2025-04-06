import { useState, createContext, useContext } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { fetchThemes } from '../../../redux/store/actionCreators/actionCreators'
import { base_URL } from '../../../variables/vars'
import styles from './blitz.module.css'
import BlitzQuestionsContainer from './BlitzQuestionsContainer'
import Pagination from '../../UIcomponents/Pagination'

export const OffsetContext = createContext({
  offset: undefined,
  setOffset: () => {},
})
export const useOffsetContext = () => useContext(OffsetContext)

const BlitzThemeItemContainer = ({ id, title, description, reFetchThemes }) => {
  const [questionData, setQuestionData] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const limit = 5 // Количество вопросов на странице
  const [offset, setOffset] = useState(undefined)

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
    setTotalPages(
      Math.floor(fetchQuestionsCount.data.data.questions_count / limit)
    )
  }

  const fetchQuestionsData = async (id, newPage, offset) => {
    fetchTotalQuestionsCount(id)
    try {
      const data = await axios.get(`${base_URL}/game/blitz.questions_list`, {
        params: {
          theme_id: id,
          limit: limit,
          offset: offset,
        },
      })
      setQuestionData(data.data.data.questions)
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

  const handleIsActive = (id) => {
    setIsActive(!isActive)
  }

  const handlePageChange = (newPage, offset) => {
    setCurrentPage(newPage)
    fetchQuestionsData(id, newPage, offset)
  }

  return (
    <OffsetContext.Provider value={{ offset, setOffset }}>
      <div className={styles.blitz_container}>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
        />
        <div className={styles.blitz_container}>
          {isActive ? (
            <>
              <BlitzQuestionsContainer
                questionData={questionData}
                reFetchQuestions={() => fetchQuestionsData(id, currentPage)}
                themeId={id}
                title={title}
              />
              <Pagination
                limit={limit}
                paginate={handlePageChange}
                page={currentPage}
                count={totalPages}
              />
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
                      fetchQuestionsData(id, currentPage)
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
              onClick={handleIsActive}
            >
              Назад к темам
            </button>
          </div>
        )}
      </div>
    </OffsetContext.Provider>
  )
}

export default BlitzThemeItemContainer
