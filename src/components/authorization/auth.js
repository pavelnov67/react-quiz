import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import styles from './auth.module.css'

const url_APIPost = 'http://176.108.249.249/admin.login'
const url_APIGet = 'http://176.108.249.249/quiz.questions_list?theme_id=1'
axios.defaults.withCredentials = true

const Auth = () => {
  const [email, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isActive, setIsActive] = useState(false)

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
      console.log(user.data)
      setIsActive(true)
    } catch (err) {
      setIsActive(false)
      setError(err.message)
    }
    if (document.cookie) {
      console.log(document.cookie)
    }
  }

  const handleClick = () => {
    try {
      const userData = axios.get(url_APIGet)
      console.log(userData.data)
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className={styles.authFormContainer}>
      <form onSubmit={handleSubmit}>
        <h1>Auth Form</h1>
        <input
          placeholder="Enter email"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Enter password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className={styles.error_message}>{error}</p>
        <button type="submit">LogIn</button>
      </form>
      {isActive ? (
        <button
          className="getQbutton"
          type="button"
          onClick={handleClick}
        >
          Get questions
        </button>
      ) : (
        ''
      )}
    </div>
  )
}
export default Auth
