import { useState, useEffect } from 'react'
import axios from 'axios'
import { base_URL } from '../../../variables/vars'
import BlitzTheme from './BlitzTheme'
import styles from '../../ui.module.css'

const BlitzQuestionsList = () => {
  const [themesData, setThemesData] = useState({})

  useEffect(() => {
    const handleClick = async () => {
      try {
        const data = await axios.get(
          `${base_URL}/game/blitz.themes_list`,
          { withCredentials: true },
          { crossDomain: true }
        )
        setThemesData(data.data.data.themes)
        console.log(data.data.data.themes)
      } catch (e) {
        console.log(e)
      }
    }
    handleClick()
  }, [])

  console.log()

  return (
    <div className={styles.blitz_container}>
      <BlitzTheme />
    </div>
  )
}

export default BlitzQuestionsList

/*{themesData.map((theme) => (
        <BlitzTheme key={theme.id} {...theme} />
      ))}
        */
