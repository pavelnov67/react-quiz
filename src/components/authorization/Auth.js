import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './auth.module.css'
import { base_URL } from '../variables/vars'

const url_APIPost = `${base_URL}/admin.login`
axios.defaults.withCredentials = true

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const instance = axios.create({
      baseURL: url_APIPost,
      timeout: 10000,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    try {
      const loginBody = {
        email,
        password,
      }
      await instance.post(url_APIPost, loginBody)
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className={styles.authFormContainer}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h1>Авторизация</h1>
        <div className={styles.form_inputs}>
          <label>Email</label>
          <input
            placeholder="Введите email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Пароль</label>
          <input
            placeholder="Введите пароль"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className={styles.error_message}>{error}</p>
        <button type="submit">Войти</button>
      </form>
    </div>
  )
}
export default Auth
