import { useState, useEffect } from 'react'
import axios from 'axios'
import { base_URL } from '../../../variables/vars'
import BlitzQuestion from './BlitzQuestion'
import styles from '../../ui.module.css'

const BlitzTheme = ({ id, description, title }) => {
  console.log(id)
  console.log(description)
  console.log(title)
  const [questionsData, setQuestionsData] = useState({})

  useEffect(() => {
    const handleClickQuestions = async () => {
      try {
        const data = await axios.get(
          `${base_URL}/game/blitz.questions_list?theme_id=1`
        )
        setQuestionsData(data)
      } catch (e) {
        console.log(e)
      }
    }
    handleClickQuestions()
  }, [])

  return <BlitzQuestion />
}

export default BlitzTheme
