import axios from 'axios'
import { base_URL } from '../../../variables/vars'
import styles from '../../ui.module.css'

const BlitzQuestionItemContainer = ({
  title,
  answer,
  id,
  reFetchQuestions,
  themeId,
}) => {
  const handleDeleteQuestion = async () => {
    const instance = axios.create({
      timeout: 5000,
      headers: {
        accept: 'application/json',
      },
    })
    try {
      await instance.delete(
        `${base_URL}/game/blitz.questions_delete_by_id?question_id=${id}`
      )
      reFetchQuestions(themeId)
    } catch (err) {
      console.log(err)
    }
  }

  const handleEditQuestion = (id) => {
    console.log('Click edit btn')
  }

  return (
    <div className={styles.blitz_question_item_container}>
      <label>Текст вопроса №{id}:</label>
      <h3>{title}</h3>
      <label>Текст ответа:</label>
      <h3>{answer}</h3>
      <div className={styles.theme_item_btns_container}>
        <button
          className={styles.start_quiz_btn}
          type="button"
          onClick={handleEditQuestion}
        >
          Редактировать
        </button>
        <button
          className={styles.delete_btn}
          type="button"
          onClick={handleDeleteQuestion}
        >
          Удалить
        </button>
      </div>
    </div>
  )
}

export default BlitzQuestionItemContainer
