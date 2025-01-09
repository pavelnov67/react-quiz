import { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { base_URL } from '../../../variables/vars'
import styles from '../../ui.module.css'
import Container from './BlitzThemeItemContainer'

const BlitzThemesContainer = () => {
  const [themesData, setThemesData] = useState([])
  const [reFetch, setReFetch] = useState(null)

  useEffect(() => {
    const fetchThemesData = async () => {
      try {
        const data = await axios.get(`${base_URL}/game/blitz.themes_list`)
        setThemesData(data.data.data.themes)
      } catch (err) {
        toast.error(err.message)
      }
    }
    fetchThemesData()
  }, [reFetch])

  return (
    <div className={styles.blitz_container}>
      <ToastContainer position="bottom-right" autoClose={2000} />
      {themesData.map((theme) => (
        <Container key={theme.id} {...theme} reFetch={setReFetch} />
      ))}
    </div>
  )
}

export default BlitzThemesContainer
