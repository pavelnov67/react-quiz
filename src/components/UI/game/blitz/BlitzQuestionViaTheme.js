import styles from '../../ui.module.css'

const BlitzQuestionViaTheme = ({ title, answer, id }) => {
  const handkeDeleteQuestion = () => {
    console.log(`Удалаить вопрос с id=${id}`)
  }
  return (
    <div className={styles.blitz_question_container}>
      <label>Текст вопроса:</label>
      <h3>{title}</h3>
      <label>Текст ответа:</label>
      <h3>{answer}</h3>
      <button
        className={styles.delete_btn}
        type="button"
        onClick={handkeDeleteQuestion}
      >
        Удалить
      </button>
    </div>
  )
}

export default BlitzQuestionViaTheme
