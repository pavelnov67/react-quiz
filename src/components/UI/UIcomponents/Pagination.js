import { useCallback, useContext } from 'react'
import styles from '../ui.module.css'
import { OffsetContext } from '../game/blitz/BlitzThemeItemContainer'

const Pagination = ({ page, paginate }) => {
  const offsetContext = useContext(OffsetContext)

  const handleClick = () => {
    return offsetContext.offset === undefined ? 5 : offsetContext.offset + 5
  }

  console.log(handleClick())

  return (
    <div className={styles.paginate_container}>
      <button
        className={styles.paginate_btn}
        onClick={() => paginate(page - 1)}
      >
        Назад
      </button>
      <h4> {page}</h4>
      {page < 2 && (
        <button
          className={styles.paginate_btn}
          onClick={() => paginate(page + 1, handleClick())}
        >
          Вперёд
        </button>
      )}
    </div>
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
