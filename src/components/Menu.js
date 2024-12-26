import { useState, useEffect } from 'react'
import axios from 'axios'
import { base_URL } from './variables/vars'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { RiAdminLine } from 'react-icons/ri'
import { BiAddToQueue } from 'react-icons/bi'
import { CiViewList, CiCircleQuestion } from 'react-icons/ci'
import { SlGameController } from 'react-icons/sl'
import styles from './UI/adminPage/adminPage.module.css'

const Menu = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const userData = await axios.get(`${base_URL}/admin.current`)
        setUserName(userData.data.data.email)
      } catch (err) {
        console.log(err)
      }
    }
    fetchCurrentUser()
    setIsLogged(true)
  }, [])

  const handleLogin = () => {
    navigate('/auth')
  }

  return (
    <div className={styles.menu_container}>
      <header>
        <h2>Страница администратора</h2>
        {isLogged ? (
          <div className={styles.admin_icon_menu}>
            <RiAdminLine />
            <h4>{userName}</h4>
          </div>
        ) : (
          <button
            className={styles.login_btn}
            type="button"
            onClick={handleLogin}
          >
            Войти
          </button>
        )}
      </header>
      <div className={styles.side_container}>
        <div className={styles.sidebar}>
          <ul>
            <h3>Меню игры 100/1</h3>
            <li>
              <Link
                to="quiz"
                className={styles.anchor_btn_container}
              >
                <div className={styles.side_icon}>
                  <CiViewList />
                </div>
                <button className={styles.anchor_btn}>Инфо</button>
              </Link>
            </li>
            <li>
              <Link
                to="add_question_page"
                className={styles.anchor_btn_container}
              >
                <div className={styles.side_icon}>
                  <BiAddToQueue />
                </div>
                <button className={styles.anchor_btn}>
                  Добавление вопроса
                </button>
              </Link>
            </li>
            <li>
              <Link
                to="active_games"
                className={styles.anchor_btn_container}
              >
                <div className={styles.side_icon}>
                  <SlGameController />
                </div>
                <button className={styles.anchor_btn}>Активные игры</button>
              </Link>
            </li>
            <br></br>
            <h3>Меню игры блиц</h3>
            <li>
              <Link
                to="blitz"
                className={styles.anchor_btn_container}
              >
                <div className={styles.side_icon}>
                  <CiViewList />
                </div>
                <button className={styles.anchor_btn}>Список вопросов</button>
              </Link>
            </li>
            <li>
              <Link
                to="blitz_add_theme"
                className={styles.anchor_btn_container}
              >
                <div className={styles.side_icon}>
                  <BiAddToQueue />
                </div>
                <button className={styles.anchor_btn}>Добавить тему</button>
              </Link>
            </li>
            <li>
              <Link
                to="blitz_add_question"
                className={styles.anchor_btn_container}
              >
                <div className={styles.side_icon}>
                  <CiCircleQuestion />
                </div>
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
