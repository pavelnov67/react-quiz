import BlitzQuestionItemContainer from './BlitzQuestionItemContainer'
import styles from '../../ui.module.css'

const BlitzQuestionsContainer = ({ questionData }) => {
  return (
    <div className={styles.blitz_container}>
      {questionData.map((question) => (
        <BlitzQuestionItemContainer key={question.id} {...question} />
      ))}
    </div>
  )
}

export default BlitzQuestionsContainer
