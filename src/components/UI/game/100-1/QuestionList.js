import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import styles from '../question.module.css'
import { base_URL } from '../../../variables/vars'
import PopUp from '../../components/pop-up'

axios.defaults.withCredentials = true

const Question = ({ questionsData, reFetch }) => {
  const [show, setShow] = useState(false)
  const questions = questionsData

  const showing = () => {
    setShow(true)
  }
  const hiding = () => {
    setShow(false)
  }

  const handleDelete = async (id) => {
    const instance = axios.create({
      timeout: 5000,
      headers: {
        accept: 'application/json',
      },
    })
    try {
      await instance.delete(
        `${base_URL}/game/quiz.questions_delete_by_id?question_id=${id}`
      )
      toast.info('Вопрос удалён')
      reFetch()
    } catch (err) {
      if (err.status === 409) {
        toast.error('Этот вопрос нельзя удалять')
      } else {
        console.log(err)
        toast.error(err.message)
      }
    }
  }

  return (
    <main className={styles.questions_container}>
      <ToastContainer position="bottom-right" autoClose={2000} />
      {questions.map((question) => (
        <div key={question.id} className={styles.question_container}>
          {show ? (
            <PopUp
              show={show}
              onClose={hiding}
              deleteData={() => handleDelete(question.id)}
            />
          ) : (
            <>
              <h2>Вопрос №{question.id}</h2>
              <h3>{question.title}</h3>
              <hr></hr>
              <div className={styles.answer_header}>
                <p>Ответы</p>
                <p>Баллы</p>
              </div>
              <div className={styles.answer_container}>
                {question.answers.map((answer) => (
                  <div className={styles.answers} key={answer.id}>
                    <h3>{answer.title}</h3>
                    <h3>{answer.score}</h3>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={showing}
                className={styles.delete_btn}
              >
                Удалить
              </button>
            </>
          )}
        </div>
      ))}
    </main>
  )
}

export default Question
