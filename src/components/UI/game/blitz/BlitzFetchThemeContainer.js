//компонент получения данных
// для выпадающего списка в компоненте добавления вопроса

import { useState, useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios'
import BlitzAddQuestion from './BlitzAddQuestion'
import { base_URL } from '../../../variables/vars'
import styles from '../../adminPage/adminPage.module.css'

const BlitzFetchThemeContainer = () => {
  const [numbersArr, setNumbersArr] = useState([])
  const [selectedOption, setSelectedOption] = useState([])
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

  const dropDownList = () => {
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

  const id = numbersArr.map((theme) => {
    if (selectedOption.value === theme.title) return theme.id
    return null
  })

  const themeNumber = id.find((i) => {
    if (i) return i
    return null
  })

  return (
    <div>
      <BlitzAddQuestion
        themeNumber={themeNumber}
        dropDownList={dropDownList}
      />
    </div>
  )
}

export default BlitzFetchThemeContainer
