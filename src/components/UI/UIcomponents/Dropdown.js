import React, { useState, useRef, useEffect } from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import { IconContext } from 'react-icons'
import styles from './dropdown.module.css'

export default function Dropdown() {
  const container = useRef()
  const [dropdownState, setDropdownState] = useState({ open: false })
  const [limit, setLimit] = useState(5)

  const itemLimits = [5, 10, 15]

  const handleItemLimit = (newLimit) => {
    setLimit(newLimit)
  }
  console.log(limit)
  const handleDropdownClick = () =>
    setDropdownState({ open: !dropdownState.open })

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setDropdownState({ open: false })
    }
  }

  // attaches an eventListener to listen when componentDidMount логика скрытия дропа по нажатию мимо
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    // optionally returning a func in useEffect runs like componentWillUnmount to cleanup
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={styles.container} ref={container}>
      <button
        type="button"
        className={styles.button}
        onClick={handleDropdownClick}
      >
        <IconContext.Provider
          value={{
            color: 'blue',
            className: 'global-class-name',
            size: '0.5em',
          }}
        >
          <div>
            <FaAngleDown />
          </div>
        </IconContext.Provider>
      </button>
      {dropdownState.open && (
        <div className={styles.dropdown}>
          <ul>
            <li onClick={() => handleItemLimit(itemLimits[0])}>
              {itemLimits[0]}
            </li>
            <li onClick={() => handleItemLimit(itemLimits[1])}>
              {itemLimits[1]}
            </li>
            <li onClick={() => handleItemLimit(itemLimits[2])}>
              {itemLimits[2]}
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
