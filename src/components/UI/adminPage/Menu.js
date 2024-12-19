import { Link } from 'react-router-dom'
import styles from './adminPage.module.css'

const Menu = () => {
  return (
    <nav className={styles.home_anchors}>
      <Link to="add_question_page">Добавление вопроса</Link>
      <hr className={styles.mainLayoutHR} />
      <Link to="quiz">Игра</Link>
    </nav>
  )
}

export default Menu
