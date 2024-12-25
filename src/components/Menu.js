import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from './UI/adminPage/adminPage.module.css'

const Menu = () => {
  return (
    <div className={styles.menu_container}>
      <header>
        <h2>Страница администратора</h2>
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
