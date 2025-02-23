import React from 'react'
import styles from '../ui.module.css'

const Pagination = ({ page, count, paginate }) => {
  const pageNums = []

  for (let i = 1; i <= Math.ceil(count / 5); i++) {
    pageNums.push(i)
  }

  return (
    <div className={styles.paginate_container}>
      {pageNums.length > 1 &&
        pageNums.map((num) => (
          <li key={num}>
            <button className={styles.paginate_btn}>{num}</button>
          </li>
        ))}
    </div>
  )
}

export default Pagination
