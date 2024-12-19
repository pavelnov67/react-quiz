import styles from '../ui.module.css'
import data from '../../data/data.json'

const Question = (props) => {
  const questions = data.data.questions

  return (
    <>
      {questions.map((question) => (
        <div
          key={question.id}
          className={styles.question_container}
        >
          <h2>{question.id}</h2>
          <h3>{question.title}</h3>
          <hr></hr>
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
    </>
  )
}

export default Question
