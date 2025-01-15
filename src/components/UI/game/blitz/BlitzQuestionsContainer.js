import BlitzQuestionItemContainer from './BlitzQuestionItemContainer'
import styles from '../../ui.module.css'

const BlitzQuestionsContainer = ({
  questionData,
  reFetchQuestions,
  themeId,
  title,
}) => {
  return (
    <div className={styles.blitz_container}>
      <h3>
        Тема №{themeId}: {title}
      </h3>
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
