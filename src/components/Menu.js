import { useState, useEffect } from 'react'
import axios from 'axios'
import { base_URL } from './variables/vars'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { RiAdminLine } from 'react-icons/ri'
import { BiAddToQueue } from 'react-icons/bi'
import { CiViewList, CiCircleQuestion } from 'react-icons/ci'
import { SlGameController } from 'react-icons/sl'
import styles from './UI/adminPage/adminPage.module.css'

const Menu = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const userData = await axios.get(`${base_URL}/admin.current`)
        setUserName(userData.data.data.email)
      } catch (err) {
        console.log(err)
        toast.error('Требуется авторизация')
      }
    }
    fetchCurrentUser()
  }, [])

  const handleLogin = () => {
    navigate('/auth')
  }

  const handleLogOut = async (e) => {
    e.preventDefault()
    const instance = axios.create({
      baseURL: base_URL,
      timeout: 10000,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    try {
      await instance.post(`${base_URL}/admin.logout`)
      navigate('/auth')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className={styles.menu_container}>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
      />
      <header>
        <div className={styles.header_main_container}>
          <h2>Страница администратора</h2>
          {userName ? (
            <div className={styles.admin_icon_menu}>
              <RiAdminLine />
              <h4>{userName}</h4>
              <button
                className={styles.logOut_btn}
                type="button"
                onClick={handleLogOut}
              >
                Выход
              </button>
            </div>
          ) : (
            <div className={styles.header_main_container}>
              <p>Требуется авторизация</p>
              <button
                className={styles.login_btn}
                type="button"
                onClick={handleLogin}
              >
                Войти
              </button>
            </div>
          )}
        </div>
      </header>
      {userName && (
        <div className={styles.side_container}>
          <div className={styles.sidebar}>
            <ul>
              <h3>Меню игры сто к одному</h3>
              <li>
                <Link
                  to="questions_list"
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
                  to="add_question_page"
                  className={styles.anchor_btn_container}
                >
                  <div className={styles.side_icon}>
                    <BiAddToQueue />
                  </div>
                  <button className={styles.anchor_btn}>Добавить вопрос</button>
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
                  to="blitz_themes_container"
                  className={styles.anchor_btn_container}
                >
                  <div className={styles.side_icon}>
                    <CiViewList />
                  </div>
                  <button className={styles.anchor_btn}>Списоок тем</button>
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
              <h3>Меню чатов</h3>
              <li>
                <Link
                  to="conversations"
                  className={styles.anchor_btn_container}
                >
                  <div className={styles.side_icon}>
                    <CiViewList />
                  </div>
                  <button className={styles.anchor_btn}>Чаты</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu
