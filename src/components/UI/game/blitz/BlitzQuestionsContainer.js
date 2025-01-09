import BlitzQuestionItemContainer from './BlitzQuestionItemContainer'
import styles from '../../ui.module.css'

const BlitzQuestionsContainer = ({
  questionData,
  reFetchQuestions,
  themeId,
}) => {
  return (
    <div className={styles.blitz_container}>
      {questionData.map((question) => (
        <BlitzQuestionItemContainer
          key={question.id}
          {...question}
          reFetchQuestions={reFetchQuestions}
          themeId={themeId}
        />
      ))}
    </div>
  )
}

export default BlitzQuestionsContainer
