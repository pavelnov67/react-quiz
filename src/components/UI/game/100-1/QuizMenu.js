import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import QuestionList from './QuestionList'
import { base_URL } from '../../../variables/vars'
import styles from '../../ui.module.css'

const url_APIGet = `${base_URL}/game/quiz.questions_list?theme_id=1`

const Quiz = () => {
  const [questionsData, setQuestionsData] = useState([])
  const [click, setClick] = useState(0)

  const handleClick = async () => {
    try {
      const data = await axios.get(
        url_APIGet,
        { withCredentials: true },
        { crossDomain: true }
      )
      setQuestionsData(data.data.data.questions)
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }

  useEffect(() => {
    handleClick()
  }, [click])

  const handleClickToFetch = () => {
    setClick((prev) => prev + 1)
  }

  return (
    <>
      <h3 className={styles.head_name}>Меню игры сто к одному</h3>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <div>
        <QuestionList
          reFetch={handleClickToFetch}
          questionsData={questionsData}
        />
      </div>
    </>
  )
}

export default Quiz
