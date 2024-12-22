import { Link } from 'react-router-dom'
import styles from './adminPage.module.css'

const Menu = () => {
  return (
    <nav className={styles.home_anchors}>
      <Link to="add_question_page">Добавление вопроса</Link>
      <Link to="quiz">Инфо</Link>
      <Link to="active_games">Активные игры</Link>
    </nav>
  )
}

export default Menu
