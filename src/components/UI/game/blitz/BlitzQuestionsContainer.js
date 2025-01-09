import { ToastContainer, toast } from 'react-toastify'
import { base_URL } from '../../../variables/vars'
import BlitzQuestionViaTheme from './BlitzQuestionViaTheme'
import styles from '../../ui.module.css'

const BlitzQuestionsContainer = ({ questionData }) => {
  return (
    <div className={styles.blitz_container}>
      <ToastContainer position="bottom-right" autoClose={2000} />
      {questionData.map((question) => (
        <BlitzQuestionViaTheme key={question.id} {...question} />
      ))}
    </div>
  )
}

export default BlitzQuestionsContainer
