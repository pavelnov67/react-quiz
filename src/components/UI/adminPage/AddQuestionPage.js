import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './adminPage.module.css'
import { base_URL } from '../../variables/vars'

axios.defaults.withCredentials = true

const AddQuestionPage = () => {
  const [question, setQuestion] = useState('')
  const [answer1, setAnswer1] = useState('')
  const [points1, setPoints1] = useState('')
  const [answer2, setAnswer2] = useState('')
  const [points2, setPoints2] = useState('')
  const [answer3, setAnswer3] = useState('')
  const [points3, setPoints3] = useState('')
  const [answer4, setAnswer4] = useState('')
  const [points4, setPoints4] = useState('')
  const [answer5, setAnswer5] = useState('')
  const [points5, setPoints5] = useState('')
  const [answer6, setAnswer6] = useState('')
  const [points6, setPoints6] = useState('')
  const [answer7, setAnswer7] = useState('')
  const [points7, setPoints7] = useState('')
  const [error, setError] = useState('')
  const [addSixQtn, setAddSixQtn] = useState(false)
  const [addSevenQtn, setAddSevenQtn] = useState(false)
  const [count, setCount] = useState(0)
  const notify = () => toast.info('Вопрос успешно добавлен')

  const handleReset = () => {
    setQuestion('')
    setAnswer1('')
    setPoints1('')
    setAnswer2('')
    setPoints2('')
    setAnswer3('')
    setPoints3('')
    setAnswer4('')
    setPoints4('')
    setAnswer5('')
    setPoints5('')
    setAnswer6('')
    setPoints6('')
    setAnswer7('')
    setPoints7('')
    setAddSixQtn('')
    setAddSevenQtn('')
    setCount(0)
  }

  const handleAddQtn = () => {
    setAddSixQtn(true)
    setCount(count + 1)
    if (count >= 1) {
      setAddSevenQtn(true)
    }
  }

  let formBody = {
    title: question,
    theme_id: 1,
    answers: [
      {
        title: answer1,
        score: points1,
      },
      {
        title: answer2,
        score: points2,
      },
      {
        title: answer3,
        score: points3,
      },
      {
        title: answer4,
        score: points4,
      },
      {
        title: answer5,
        score: +points5,
      },
    ],
  }
  if (addSevenQtn) {
    formBody = {
      title: question,
      theme_id: 1,
      answers: [
        {
          title: answer1,
          score: points1,
        },
        {
          title: answer2,
          score: points2,
        },
        {
          title: answer3,
          score: points3,
        },
        {
          title: answer4,
          score: points4,
        },
        {
          title: answer5,
          score: +points5,
        },
        {
          title: answer6,
          score: +points6,
        },
        {
          title: answer7,
          score: +points7,
        },
      ],
    }
  } else if (addSixQtn) {
    formBody = {
      title: question,
      theme_id: 1,
      answers: [
        {
          title: answer1,
          score: points1,
        },
        {
          title: answer2,
          score: points2,
        },
        {
          title: answer3,
          score: points3,
        },
        {
          title: answer4,
          score: points4,
        },
        {
          title: answer5,
          score: +points5,
        },
        {
          title: answer6,
          score: +points6,
        },
      ],
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const instance = axios.create({
      timeout: 5000,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    try {
      await instance.post(`${base_URL}/game/quiz.questions_add`, formBody)
      handleReset()
      notify()
    } catch (err) {
      setError(err.message)
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
        onSubmit={handleSubmit}
      >
        <h1>Форма добавления вопроса</h1>
        <hr />
        <div className={styles.inputContainer}>
          <label>Введите текст вопроса</label>
          <textarea
            placeholder="Введите текст"
            className={styles.questionInput}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows="5"
            cols="33"
          ></textarea>
        </div>
        <div className={styles.inputContainer}>
          <label>Введите самый популярный вариант ответа</label>
          <div>
            <input
              type="text"
              className={styles.ansverInput}
              placeholder="Введите текст"
              value={answer1}
              onChange={(e) => setAnswer1(e.target.value)}
            />
            <input
              type="text"
              className={styles.pointInput}
              placeholder="Баллы"
              value={points1}
              onChange={(e) => setPoints1(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Введите 2й по популярности вариант ответа</label>
          <div>
            <input
              className={styles.ansverInput}
              placeholder="Введите текст"
              value={answer2}
              onChange={(e) => setAnswer2(e.target.value)}
            />
            <input
              type="text"
              className={styles.pointInput}
              placeholder="Баллы"
              value={points2}
              onChange={(e) => setPoints2(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Введите 3й по популярности вариант ответа</label>
          <div>
            <input
              className={styles.ansverInput}
              placeholder="Введите текст"
              value={answer3}
              onChange={(e) => setAnswer3(e.target.value)}
            />
            <input
              type="text"
              className={styles.pointInput}
              placeholder="Баллы"
              value={points3}
              onChange={(e) => setPoints3(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Введите 4й по популярности вариант ответа</label>
          <div>
            <input
              className={styles.ansverInput}
              placeholder="Введите текст"
              value={answer4}
              onChange={(e) => setAnswer4(e.target.value)}
            />
            <input
              type="text"
              className={styles.pointInput}
              placeholder="Баллы"
              value={points4}
              onChange={(e) => setPoints4(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Введите 5й по популярности вариант ответа</label>
          <div>
            <input
              className={styles.ansverInput}
              placeholder="Введите текст"
              value={answer5}
              onChange={(e) => setAnswer5(e.target.value)}
            />
            <input
              type="text"
              className={styles.pointInput}
              placeholder="Баллы"
              value={points5}
              onChange={(e) => setPoints5(e.target.value)}
            />
          </div>
        </div>
        {addSixQtn && (
          <div className={styles.inputContainer}>
            <label>Введите 6й по популярности вариант ответа</label>
            <div>
              <input
                className={styles.ansverInput}
                placeholder="Введите текст"
                value={answer6}
                onChange={(e) => setAnswer6(e.target.value)}
              />
              <input
                type="text"
                className={styles.pointInput}
                placeholder="Баллы"
                value={points6}
                onChange={(e) => setPoints6(e.target.value)}
              />
            </div>
          </div>
        )}
        {addSevenQtn && (
          <div className={styles.inputContainer}>
            <label>Введите 7й по популярности вариант ответа</label>
            <div>
              <input
                className={styles.ansverInput}
                placeholder="Введите текст"
                value={answer7}
                onChange={(e) => setAnswer7(e.target.value)}
              />
              <input
                type="text"
                className={styles.pointInput}
                placeholder="Баллы"
                value={points7}
                onChange={(e) => setPoints7(e.target.value)}
              />
            </div>
          </div>
        )}
        {setAddSevenQtn && (
          <div className={styles.addAnswerBtn}>
            <button
              type="button"
              onClick={handleAddQtn}
            >
              +
            </button>
          </div>
        )}
        <p className={styles.error_message}>{error}</p>
        <div className={styles.buttonContainer}>
          <button type="submit">Сохранить</button>
          <button
            type="button"
            onClick={handleReset}
          >
            Сбросить всё
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddQuestionPage
