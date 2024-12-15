import { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { url_APIGet } from '../authorization/auth'
import Question from './Question'

const Quiz = (props) => {
  const [questions, setQuestions] = useState({})

  const handleClick = async () => {
    try {
      const data = await axios.get(url_APIGet)
      setQuestions(data.status)
      console.log(questions)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div>
        <button
          className="getQbutton"
          type="button"
          onClick={handleClick}
        >
          Get questions
        </button>
      </div>
      <div></div>
    </>
  )
}

export default Quiz

/*        {questions.map((question) => (
          <Question
            {...question}
            key={uuidv4()}
          />
        ))}*/
