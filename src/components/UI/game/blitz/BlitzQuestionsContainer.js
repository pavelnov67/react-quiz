import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { base_URL } from '../../../variables/vars'
import BlitzQuestionViaTheme from './BlitzQuestionViaTheme'
import styles from '../../ui.module.css'

const BlitzQuestionsContainer = ({ themeId }) => {
  const [questionData, setQuestionData] = useState([])

  console.log(questionData)

  useEffect(() => {
    const fetchQuestionsData = async () => {
      try {
        const data = await axios.get(
          `${base_URL}/game/blitz.questions_list?theme_id=1`
        )
        setQuestionData(data.data.data.questions)
      } catch (err) {
        toast.error(err.message)
      }
    }
    fetchQuestionsData()
  }, [])

  return (
    <div className={styles.blitz_container}>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
      />
      {questionData.map((question) => (
        <BlitzQuestionViaTheme
          className={styles.blitz_container}
          key={question.id}
          {...question}
        />
      ))}
      <br></br>
    </div>
  )
}

export default BlitzQuestionsContainer
