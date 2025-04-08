import { useContext, useState } from 'react'
import styles from '../ui.module.css'
import { OffsetContext } from '../game/blitz/BlitzThemeItemContainer'

const Pagination = ({
  page,
  paginate,
  questionsCount,
  data,
  RenderComponent,
  dataLimit,
}) => {
  const offsetContext = useContext(OffsetContext)
  const [currentPage, setCurrentPage] = useState(1)

  const pages = Math.ceil(questionsCount / dataLimit)

  function goToNextPage() {
    setCurrentPage((currentPage) => currentPage + 1)
    let newOffset =
      offsetContext.offset === 0
        ? dataLimit
        : (offsetContext.offset += dataLimit)
    paginate(currentPage, newOffset)
  }

  function goToPreviousPage() {
    setCurrentPage((currentPage) => currentPage - 1)
    let newOffset = offsetContext.offset - dataLimit
    if (newOffset < 1) newOffset = undefined
    paginate(currentPage, newOffset)
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent)
    setCurrentPage(pageNumber)
  }

  const getPaginatedData = () => {}

  const getPaginationGroup = () => {}

  const handleNextPage = () => {
    return offsetContext.offset === undefined ? 5 : offsetContext.offset + 5
  }
  const handlePrevPage = () => {
    return offsetContext.offset === undefined ? 5 : offsetContext.offset - 5
  }
  return (
    <>
      {dataLimit ? (
        <div className={styles.paginate_container}>
          {currentPage <= 1 ? (
            <button className={styles.disabled_btn}>Назад</button>
          ) : (
            <button className={styles.paginate_btn} onClick={goToPreviousPage}>
              Назад
            </button>
          )}
          <h4> {currentPage}</h4>
          {currentPage < pages ? (
            <button className={styles.paginate_btn} onClick={goToNextPage}>
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
