import { useEffect, useRef } from 'react'
import styles from '../ui.module.css'

const PopUp = ({ show, onCancel, onClose, deleteData, id }) => {
  const modalRef = useRef(null)
  const closeModalOnClickOut = (e) => {
    if (
      show &&
      e.target &&
      modalRef.current &&
      !modalRef.current.contains(e.target) &&
      onClose
    ) {
      onClose()
    }
  }

  const closeModalOnEscKeyDown = (e) => {
    if (show && e.code === 'Escape' && onClose) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', closeModalOnEscKeyDown)
    return () => {
      document.removeEventListener('mousedown', closeModalOnEscKeyDown)
    }
  }, [show])
  /*useEffect(() => {
    document.body.addEventListener('mousedown', closeModalOnClickOut)
    return () => {
      document.body.removeEventListener('mousedown', closeModalOnClickOut)
    }
  }, [show])*/

  const onCancelClicked = () => {
    if (onClose) onClose()
    if (onCancel) onCancel()
  }

  const onConfirmClicked = () => {
    deleteData()
    if (onClose) onClose()
  }

  if (show) {
    return (
      <div className={styles.modal_backdrop}>
        <div ref={modalRef} className={styles.modal_content}>
          <div className={styles.body}>
            <h3>Удалить вопрос № {id}?</h3>
          </div>
          <div className={styles.footer}>
            <button onClick={onCancelClicked} className={styles.text_btn}>
              Отмена
            </button>
            <button onClick={onConfirmClicked} className={styles.flat_btn}>
              Удалить
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default PopUp
