import styles from './adminPage/adminPage.module.css'
import data from '../data/data.json'

const Question = (props) => {
  const questions = data.data.questions

  const answers = questions.map((question) => question.answers)

  console.log(answers)

  console.log(answers[0].map((title) => title.title))

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
          <div className={styles.answer_container}></div>
        </div>
      ))}
    </>
  )
}

export default Question
