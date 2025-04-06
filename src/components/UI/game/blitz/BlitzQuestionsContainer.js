import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { base_URL } from '../../../variables/vars'
import BlitzQuestionItemContainer from './BlitzQuestionItemContainer'
import BlitzAddQuestion from './BlitzAddQuestion'
import styles from '../../ui.module.css'

const BlitzQuestionsContainer = ({ themeId, title, questionData }) => {
  /* const [questionData, setQuestionData] = useState([])

   useEffect(() => {
    const fetchQuestionsData = async () => {
      try {
        const data = await axios.get(
          `${base_URL}/game/blitz.questions_list?theme_id=${themeId}`
        )
        setQuestionData(data.data.data.questions)
      } catch (err) {
        if (err.status === 404) {
          toast.error('В данной теме нет вопросов')
        } else toast.error(err.message)
      }
    }
    fetchQuestionsData()
  }, [])*/

  return (
    <div className={styles.blitz_container}>
      <h3>
        Тема №{themeId}: {title}
      </h3>
      {questionData.map((question) => (
        <BlitzQuestionItemContainer
          key={question.id}
          {...question}
          themeId={themeId}
        />
      ))}
      <BlitzAddQuestion id={themeId} />
    </div>
  )
}

export default BlitzQuestionsContainer
