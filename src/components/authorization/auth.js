import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './auth.module.css'

export const base_URL = 'http://localhost:8000'
const url_APIPost = `${base_URL}/admin.login`
export const url_APIGet = `${base_URL}/quiz.questions_list?theme_id=1`
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
      const user = await instance.post(url_APIPost, loginBody)
      setEmail(user)
      navigate('main_layout')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className={styles.authFormContainer}>
      <form
        className={styles.authForm}
        onSubmit={handleSubmit}
      >
        <h1>Auth Form</h1>
        <input
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className={styles.error_message}>{error}</p>
        <button type="submit">LogIn</button>
      </form>
    </div>
  )
}
export default Auth
