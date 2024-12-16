import { Link } from 'react-router-dom'
import styles from './adminPage.module.css'

const Menu = (props) => {
  return (
    <nav className={styles.home_anchors}>
      <Link to="add_question_page">Add Question Page</Link>
      <Link to="quiz">Quiz Page</Link>
    </nav>
  )
}

export default Menu
