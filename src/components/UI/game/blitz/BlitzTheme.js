import { useState, useEffect } from 'react'
import axios from 'axios'
import { base_URL } from '../../../variables/vars'

const BlitzTheme = ({ id, description, title }) => {
  console.log(id)
  console.log(description)
  console.log(title)
  const [questionsData, setQuestionsData] = useState([
    { description: 'test1', id: 1, title: 'test1' },
  ])

  useEffect(() => {
    const handleClickQuestions = async () => {
      try {
        const data = await axios.get(
          `${base_URL}/game/blitz.questions_list?theme_id=1`
        )
        setQuestionsData(data.data.data.questions)
      } catch (e) {
        console.log(e)
      }
    }
    handleClickQuestions()
  }, [])

  const questions = questionsData.map((question) => question.title)
  console.log(questions)

  return (
    <>
      {questionsData.map((question) => (
        <div key={question.id}>
          <h3>{question.title}</h3>
          <h3>{question.answer}</h3>
        </div>
      ))}
    </>
  )
}

export default BlitzTheme
