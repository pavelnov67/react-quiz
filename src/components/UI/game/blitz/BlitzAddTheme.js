import axios from 'axios'
import { useFormik } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import { base_URL } from '../../../variables/vars'
import styles from '../../adminPage/adminPage.module.css'

const BlitzAddTheme = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    onSubmit: async (values, { resetForm, setStatus }) => {
      const instance = axios.create({
        timeout: 5000,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      try {
        await instance.post(`${base_URL}/game/blitz.themes_add`, values)
        resetForm({})
        setStatus({ success: true })
        toast.info('Тема добавлена успешно!')
      } catch (err) {
        setStatus({ success: false })
        console.log(err.message)
        toast.error(err.message)
      }
    },
  })

  return (
    <div className={styles.adminFormContainer}>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <form className={styles.adminForm} onSubmit={formik.handleSubmit}>
        <h1>Форма добавления темы</h1>
        <hr />
        <div className={styles.inputContainer}>
          <label htmlFor="title">Название темы</label>
          <input
            className={styles.blitz_input}
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <label htmlFor="description">Описание темы</label>
          <input
            className={styles.blitz_input}
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit">Сохранить</button>
        </div>
      </form>
    </div>
  )
}

export default BlitzAddTheme
