import styles from '../../ui.module.css'

const BlitzQuestion = ({ id, title, answer }) => {
  return (
    <div className={styles.blitz_question_container}>
      <h4>
        Вопрос №{id}: {title}
      </h4>
      <h4>Ответ: {answer}</h4>
      <hr />
      <br />
    </div>
  )
}

export default BlitzQuestion
