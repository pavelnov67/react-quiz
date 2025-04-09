import { useCallback, useContext, useEffect, useState } from 'react'
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
  }, [offset, setOffset])

  const pages = Math.ceil(questionsCount / dataLimit)
  /*
  const goToNextPage = () => {
    console.log('doing')
    setCurrentPage((prev) => prev + 1)
    setOffset((prev) => prev + dataLimit)

    console.log(offset)
    console.log(currentPage)
    paginate(currentPage, offset)
  }

  console.log(offset)
  console.log(currentPage)

  function goToPreviousPage() {
    setCurrentPage((currentPage) => currentPage - 1)
    setOffset((prev) => prev - dataLimit)
    paginate(currentPage, offset)
  }*/

  function changePage(event) {
    const pageNumber = Number(event.target.textContent)
    setCurrentPage(pageNumber)
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pages) * pages
    return new Array(pages).fill().map((_, idx) => start + idx + 1)
  }
  /*
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return data.slice(startIndex, endIndex)
  }
*/
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

/*

            <div className={styles.pagination}>
              <button
                onClick={() =>
                  handlePageChange(currentPage - 1, offset - limit)
                }
                disabled={currentPage === 1}
              >
                Назад
              </button>
              <span>Страница {currentPage}</span>
              <button
                onClick={() =>
                  handlePageChange(currentPage + 1, offset + limit)
                }
              >
                Вперед
              </button>
            </div>


              const pageNums = []

  for (let i = 1; i <= Math.ceil(7 / limit); i++) {
    pageNums.push(i)
  }
  console.log(pageNums)

*/
