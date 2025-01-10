import styles from '../question.module.css'
import QuestionItem from './QuestionItem'

const Question = ({ questionsData, reFetch }) => {
  return (
    <main className={styles.questions_container}>
      {questionsData.map((question) => (
        <QuestionItem key={question.id} {...question} reFetch={reFetch} />
      ))}
    </main>
  )
}

export default Question
