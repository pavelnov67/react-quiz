import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import styles from '../question.module.css'
import { base_URL } from '../../../variables/vars'
import PopUp from '../../components/pop-up'

const QuestionItem = ({ id, title, answers, reFetch }) => {
  const [show, setShow] = useState(false)

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
    <div>
      <ToastContainer position="bottom-right" autoClose={2000} />
      {show ? (
        <div>
          <br></br>
          <PopUp
            show={show}
            onClose={hiding}
            deleteData={() => handleDelete(id)}
            id={id}
          />
        </div>
      ) : (
        <>
          <h2>Вопрос №{id}</h2>
          <h3>{title}</h3>
          <hr></hr>
          <div className={styles.answer_header}>
            <p>Ответы</p>
            <p>Баллы</p>
          </div>
          <div className={styles.answer_container}>
            {answers.map((answer) => (
              <div className={styles.answers} key={answer.id}>
                <h3>{answer.title}</h3>
                <h3>{answer.score}</h3>
              </div>
            ))}
          </div>
          <button type="button" onClick={showing} className={styles.delete_btn}>
            Удалить
          </button>
        </>
      )}
    </div>
  )
}

export default QuestionItem
