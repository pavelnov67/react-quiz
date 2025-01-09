import { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { base_URL } from '../../../variables/vars'
import styles from '../../ui.module.css'
import BlitzThemeItemContainer from './BlitzThemeItemContainer'

const BlitzThemesContainer = () => {
  const [themesData, setThemesData] = useState([])
  const [reFetchThemes, setReFetchThemes] = useState(null)

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
  }, [reFetchThemes])

  return (
    <div className={styles.blitz_container}>
      <ToastContainer position="bottom-right" autoClose={2000} />
      {themesData.map((theme) => (
        <BlitzThemeItemContainer
          key={theme.id}
          {...theme}
          reFetchThemes={setReFetchThemes}
        />
      ))}
    </div>
  )
}

export default BlitzThemesContainer
