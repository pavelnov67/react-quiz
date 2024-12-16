import { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { url_APIGet } from '../authorization/auth'
import Question from './Question'

const Quiz = (props) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(true)
  }

  return (
    <>
      {isActive ? (
        <Question />
      ) : (
        <div>
          <button
            className="getQbutton"
            type="button"
            onClick={handleClick}
          >
            Get questions
          </button>
        </div>
      )}
    </>
  )
}

export default Quiz
