import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import styles from './adminPage.module.css'
import { base_URL } from '../../authorization/auth'

const AdminPage = (props) => {
  const [question, setQuestion] = useState('')
  const [answer1, setAnsver1] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const instance = axios.create({
      baseURL: `${base_URL}`,
      timeout: 10000,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    try {
      const formBody = {
        question,
        answer1,
      }
      const questionForm = await instance.post(`${base_URL}`, formBody)
      console.log(questionForm.data)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className={styles.adminFormContainer}>
      <form
        className={styles.adminForm}
        onSubmit={handleSubmit}
      >
        <h1>Форма добавления вопросов</h1>
        <hr />
        <div className={styles.inputContainer}>
          <label>Введите текст вопроса</label>
          <textarea
            placeholder="Введите текст"
            className={styles.questionInput}
            onChange={(e) => setQuestion(e.target.value)}
            rows="5"
            cols="33"
          ></textarea>
        </div>
        <div className={styles.inputContainer}>
          <label>Введите вариант ответа на 50 баллов</label>
          <input
            type="text"
            className={styles.ansverInput}
            placeholder="Введите текст"
            value={answer1}
            onChange={(e) => setAnsver1(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label>Введите вариант ответа на 25 баллов</label>
          <input
            className={styles.ansverInput}
            placeholder="Введите текст"
            onChange={(e) => setAnsver1(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label>Введите вариант ответа на 10 баллов</label>
          <input
            className={styles.ansverInput}
            placeholder="Введите текст"
            onChange={(e) => setAnsver1(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label>Введите вариант ответа на 7,5 баллов</label>
          <input
            className={styles.ansverInput}
            placeholder="Введите текст"
            onChange={(e) => setAnsver1(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label>Введите вариант ответа на 2,5 баллов</label>
          <input
            className={styles.ansverInput}
            placeholder="Введите текст"
            onChange={(e) => setAnsver1(e.target.value)}
          />
        </div>
        <p className={styles.error_message}>{error}</p>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  )
}

export default AdminPage
