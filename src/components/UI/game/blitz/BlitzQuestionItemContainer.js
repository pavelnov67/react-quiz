import styles from '../../ui.module.css'

const BlitzQuestionItemContainer = ({ title, answer, id }) => {
  const handleDeleteQuestion = () => {
    console.log(`Удалаить вопрос с id=${id}`)
  }
  return (
    <div className={styles.blitz_question_item_container}>
      <label>Текст вопроса №{id}:</label>
      <h3>{title}</h3>
      <label>Текст ответа:</label>
      <h3>{answer}</h3>
      <button
        className={styles.delete_btn}
        type="button"
        onClick={handleDeleteQuestion}
      >
        Удалить
      </button>
    </div>
  )
}

export default BlitzQuestionItemContainer
