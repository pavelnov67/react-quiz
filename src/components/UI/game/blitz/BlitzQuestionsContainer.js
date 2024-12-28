import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { base_URL } from '../../../variables/vars'
import BlitzQuestionViaTheme from './BlitzQuestionViaTheme'
import styles from '../../ui.module.css'

const BlitzQuestionsContainer = (props) => {
  const [questionsData, setQuestionsData] = useState([])

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await axios.get(
          `${base_URL}/game/blitz.questions_list?theme_id=1`
        )
        setQuestionsData(data.data.data.themes)
      } catch (err) {
        toast.error(err.message)
      }
    }
    fetchQuestions()
  }, [])

  return (
    <div className={styles.blitz_container}>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <BlitzQuestionViaTheme />
    </div>
  )
}

export default BlitzQuestionsContainer
