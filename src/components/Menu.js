import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { base_URL } from './variables/vars'
import styles from './UI/adminPage/adminPage.module.css'

const Menu = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [userName, setUserName] = useState('')
  const navigate = useNavigate()

  const handleAuth = () => {
    navigate('/auth')
  }

  const handleClickThemes = async () => {
    try {
      const userData = await axios.get(`${base_URL}/admin.current`)
      setUserName(userData.data.data.email)
      setIsLogged(true)
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }

  return (
    <div className={styles.menu_container}>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <header>
        <h2>Страница администратора</h2>
        {isLogged ? (
          <h4>{userName}</h4>
        ) : (
          <button
            className={styles.login_btn}
            type="button"
            onClick={handleClickThemes}
          >
            Войти
          </button>
        )}
      </header>
      <div className={styles.side_container}>
        <div className={styles.sidebar}>
          <ul>
            <h4>Меню игры 100/1</h4>
            <li>
              <Link to="add_question_page">
                <button className={styles.anchor_btn}>
                  Добавление вопроса
                </button>
              </Link>
            </li>
            <li>
              <Link to="quiz">
                <button className={styles.anchor_btn}>Инфо</button>
              </Link>
            </li>
            <li>
              <Link to="active_games">
                <button className={styles.anchor_btn}>Активные игры</button>
              </Link>
            </li>
            <br></br>
            <h4>Меню игры блиц</h4>
            <li>
              <Link to="blitz">
                <button className={styles.anchor_btn}>Список вопросов</button>
              </Link>
            </li>
            <li>
              <Link to="blitz_add_theme">
                <button className={styles.anchor_btn}>Добавить тему</button>
              </Link>
            </li>
            <li>
              <Link to="blitz_add_question">
                <button className={styles.anchor_btn}>Добавить вопрос</button>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Menu