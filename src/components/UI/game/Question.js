import styles from './question.module.css'

const Question = ({ questionsData }) => {
  const questions = questionsData

  return (
    <main className={styles.questions_container}>
      {questions.map((question) => (
        <div
          key={question.id}
          className={styles.question_container}
        >
          <h2>Вопрос №{question.id}</h2>
          <h3>{question.title}</h3>
          <hr></hr>
          <div className={styles.answer_header}>
            <p>Ответы</p>
            <p>Баллы</p>
          </div>
          <div className={styles.answer_container}>
            {question.answers.map((answer) => (
              <div
                className={styles.answers}
                key={answer.id}
              >
                <h3>{answer.title}</h3>
                <h3>{answer.score}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}

export default Question
