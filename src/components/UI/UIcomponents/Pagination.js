import { useContext, useEffect, useState } from 'react'
import OffsetContext from '../game/blitz/context/OffsetContext'
import styles from '../ui.module.css'

const Pagination = ({ id, page, paginate, questionsCount, dataLimit }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { offset, setOffset } = useContext(OffsetContext)

  const handlePrevPage = () => {
    if (offset <= 0) {
      return
    }

    setOffset((prev) => prev - dataLimit)
    setCurrentPage((prev) => prev - 1)
  }

  const handleNextPage = () => {
    if (offset + dataLimit >= questionsCount) {
      return
    }

    setOffset((prev) => prev + dataLimit)
    setCurrentPage((prev) => prev + 1)
  }
  console.log(offset)

  useEffect(() => {
    paginate(id, offset)
  }, [offset, setOffset, currentPage])

  const pages = Math.ceil(questionsCount / dataLimit)

  function changePage(event) {
    const pageNumber = Number(event.target.textContent)
    setCurrentPage(pageNumber)
    setOffset(() => pageNumber * dataLimit - dataLimit)
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pages) * pages
    return new Array(pages).fill().map((_, idx) => start + idx + 1)
  }

  return (
    <>
      {dataLimit ? (
        <div className={styles.paginate_container}>
          {currentPage <= 1 ? (
            <button className={styles.disabled_btn}>Назад</button>
          ) : (
            <button className={styles.paginate_btn} onClick={handlePrevPage}>
              Назад
            </button>
          )}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={
                currentPage === item
                  ? styles.paginate_item_active
                  : styles.paginate_item
              }
            >
              <span>{item}</span>
            </button>
          ))}{' '}
          {currentPage < pages ? (
            <button className={styles.paginate_btn} onClick={handleNextPage}>
              Вперёд
            </button>
          ) : (
            <button className={styles.disabled_btn}>Вперёд</button>
          )}
        </div>
      ) : (
        <h4>Loading...</h4>
      )}
    </>
  )
}

export default Pagination
