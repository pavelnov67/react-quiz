import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { base_URL } from '../../../variables/vars'
import styles from '../../adminPage/adminPage.module.css'

const BlitzAddQuestion = ({ div, themeNumber }) => {
  const [title, setTitle] = useState('')
  const [answer, setAnswer] = useState('')

  const handlePostQuestion = async (e) => {
    e.preventDefault()
    const instance = axios.create({
      timeout: 5000,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    try {
      const body = {
        title,
        answer,
        theme_id: themeNumber,
      }
      await instance.post(`${base_URL}/game/blitz.questions_add`, body)
      toast.info('Тема добавлена успешно!')
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <div className={styles.adminFormContainer}>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
      />
      <form
        className={styles.adminForm}
        onSubmit={handlePostQuestion}
      >
        <h1>Форма добавления вопроса</h1>
        <hr />
        {div()}
        <label>Текст вопроса</label>
        <input
          placeholder="Введите вопрос"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Текст ответа</label>
        <input
          placeholder="Введите ответ"
          type="text"
          onChange={(e) => setAnswer(e.target.value)}
        />
        <div className={styles.buttonContainer}>
          <button type="submit">Сохранить</button>
        </div>
      </form>
    </div>
  )
}

export default BlitzAddQuestion
