import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from './adminPage.module.css'

const Menu = () => {
  return (
    <div className={styles.menu_container}>
      <header>
        <h2>Страница администратора</h2>
      </header>
      <div className={styles.side_container}>
        <div className={styles.sidebar}>
          <ul>
            <li>
              <Link to="add_question_page">Добавление вопроса</Link>
            </li>
            <li>
              <Link to="quiz">Инфо</Link>
            </li>
            <li>
              <Link to="active_games">Активные игры</Link>
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
