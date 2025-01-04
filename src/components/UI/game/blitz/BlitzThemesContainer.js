import { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { base_URL } from '../../../variables/vars'
import styles from '../../ui.module.css'
import BlitzQuestionsContainer from './BlitzQuestionsContainer'

const BlitzThemesContainer = (props) => {
  const [themesData, setThemesData] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [reFetch, setReFetch] = useState(null)

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
  }, [reFetch])

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
      setReFetch(reFetch + 1)
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }

  const handleIsActive = () => {
    setIsActive(!isActive)
  }

  if (themesData.length > 0) {
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
          <div className={styles.blitz_container}>
            {themesData.map((theme) => (
              <div
                key={theme.id}
                className={styles.blitz_theme_container}
              >
                <div className={styles.theme_item_container}>
                  <h3>
                    Тема №{theme.id}: {theme.title}
                  </h3>
                  <p>Описание: {theme.description}</p>
                  <div className={styles.theme_item_btns_container}>
                    <button
                      className={styles.show_questions_btn}
                      type="button"
                      onClick={handleIsActive}
                    >
                      Показать вопросы
                    </button>
                    <button
                      className={styles.delete_btn}
                      type="button"
                      onClick={() => handleDelete(theme.id)}
                    >
                      Удалить тему
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  } else {
    return (
      <>
        <h2>Список тем пуст</h2>
      </>
    )
  }
}

export default BlitzThemesContainer
