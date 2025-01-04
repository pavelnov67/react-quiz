import { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { base_URL } from '../../../variables/vars'
import styles from '../../ui.module.css'
import BlitzQuestionsContainer from './BlitzQuestionsContainer'

const BlitzThemesContainer = (props) => {
  const [themesData, setThemesData] = useState([])
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const fetchThemesData = async () => {
      try {
        const data = await axios.get(`${base_URL}/game/blitz.themes_list`)
        setThemesData(data.data.data.themes)
      } catch (err) {
        toast.error(err.message)
      }
    }
    fetchThemesData()
  }, [])

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
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }

  const handleIsActive = () => {
    setIsActive(!isActive)
  }

  if (themesData) {
    return (
      <div className={styles.blitz_container}>
        <p>Раздел в разработке</p>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
        />
        <button
          className={styles.start_quiz_btn}
          type="button"
          onClick={handleIsActive}
        >
          Назад в темы
        </button>
        {isActive ? (
          <BlitzQuestionsContainer />
        ) : (
          <div>
            {themesData.map((theme) => (
              <div
                key={theme.id}
                className={styles.theme_container}
              >
                <div>
                  <h3>Id: {theme.id}</h3>
                  <h3>Тема: {theme.title}</h3>
                  <h3>Описание: {theme.description}</h3>
                  <button
                    className={styles.start_quiz_btn}
                    type="button"
                    onClick={handleIsActive}
                  >
                    Вопросы из темы
                  </button>
                  <button
                    className={styles.delete_btn}
                    type="button"
                    onClick={() => handleDelete(theme.id)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default BlitzThemesContainer
