import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import styles from '../../ui.module.css'
import BlitzThemeItemContainer from './BlitzThemeItemContainer'
import BlitzAddTheme from './BlitzAddTheme'
import OffsetContext from './context/OffsetContext'

import { useDispatch, useSelector } from 'react-redux'
import { fetchThemes } from '../../../redux/store/actionCreators/actionCreators'

const BlitzThemesContainer = () => {
  const [reFetchThemes, setReFetchThemes] = useState(0)
  const [offset, setOffset] = useState(0)
  const { themes, isLoading, error } = useSelector(
    (state) => state.themeReducer
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchThemes())
  }, [reFetchThemes])

  if (error) {
    return <h3>{error}</h3>
  } else {
    return (
      <OffsetContext.Provider value={{ offset, setOffset }}>
        <div className={styles.blitz_container}>
          <ToastContainer position="bottom-right" autoClose={2000} />
          {isLoading ? (
            <h3>Loading...</h3>
          ) : (
            <>
              {themes.map((theme) => (
                <BlitzThemeItemContainer
                  key={theme.id}
                  {...theme}
                  reFetchThemes={setReFetchThemes}
                />
              ))}
              <hr />
              <BlitzAddTheme reFetchThemes={setReFetchThemes} />
            </>
          )}
        </div>
      </OffsetContext.Provider>
    )
  }
}

export default BlitzThemesContainer
