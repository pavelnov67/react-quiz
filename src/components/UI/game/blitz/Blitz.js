import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { RiGroupLine, RiEqualizerLine, RiListCheck } from 'react-icons/ri'
import styles from './blitz.module.css'
const Blitz = () => {
  return (
    <div className={styles.blitz_main_container}>
      <div className={styles.side_container}>
        <Link
          to="blitz_themes_container"
          className={styles.anchor_btn_container}
        >
          <div className={styles.side_icon}>
            <RiListCheck />
          </div>
          <button className={styles.anchor_btn}>Темы</button>
        </Link>
        <Link
          to="blitz"
          className={styles.anchor_btn_container}
        >
          <div className={styles.side_icon}>
            <RiGroupLine />
          </div>
          <button className={styles.anchor_btn}>Профили</button>
        </Link>
        <Link
          to="blitz"
          className={styles.anchor_btn_container}
        >
          <div className={styles.side_icon}>
            <RiEqualizerLine />
          </div>
          <button className={styles.anchor_btn}>Управление</button>
        </Link>
      </div>

      <div className={styles.content_container}>
        <Outlet />
      </div>
    </div>
  )
}

export default Blitz
