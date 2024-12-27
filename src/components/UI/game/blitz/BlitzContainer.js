import { useState, useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios'
import BlitzAddQuestion from './BlitzAddQuestion'
import { base_URL } from '../../../variables/vars'
import styles from '../../adminPage/adminPage.module.css'

const BlitzContainer = () => {
  const [numbersArr, setNumbersArr] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  useEffect(() => {
    const fetchThemeNumbers = async () => {
      try {
        const data = await axios.get(`${base_URL}/game/blitz.themes_list`)
        setNumbersArr(data.data.data.themes)
      } catch (err) {
        console.log(err)
      }
    }
    fetchThemeNumbers()
  }, [])

  const newNumbersArr = numbersArr.map((data) => ({
    value: data.title,
    label: data.title,
  }))

  const div = () => {
    return (
      <Select
        className={styles.dropDown_list}
        placeholder={'Названия тем'}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={newNumbersArr}
      />
    )
  }

  return (
    <div>
      <BlitzAddQuestion
        numbers={numbersArr}
        div={div}
        selectedOption={selectedOption}
      />
    </div>
  )
}

export default BlitzContainer
