import axios from 'axios'
import { useFormik } from 'formik'
import { base_URL } from '../../../variables/vars'
import styles from '../../adminPage/adminPage.module.css'

const BlitzAddQuestion = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      theme_id: '',
      answer: '',
    },
    onSubmit: (values) => {
      const instance = axios.create({
        timeout: 5000,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      try {
        instance.post(`${base_URL}/game/blitz.questions_add`, values)
      } catch (err) {
        console.log(err.message)
      }
    },
  })

  return (
    <div className={styles.adminFormContainer}>
      <form
        className={styles.adminForm}
        onSubmit={formik.handleSubmit}
      >
        <h1>Форма добавления вопроса</h1>
        <hr />
        <div className={styles.inputContainer}>
          <label htmlFor="title">Номер темы</label>
          <input
            className={styles.blitz_input}
            id="theme_id"
            name="theme_id"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.theme_id}
          />
          <label htmlFor="title">Текст вопроса</label>
          <input
            className={styles.blitz_input}
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <label htmlFor="answer">Ответ на вопрос</label>
          <input
            className={styles.blitz_input}
            id="answer"
            name="answer"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.answer}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit">Сохранить</button>
        </div>
      </form>
    </div>
  )
}

export default BlitzAddQuestion
