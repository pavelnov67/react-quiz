import styles from '../../ui.module.css'
import avatar from '../../../../assets/unknown_avatar.png'

const ConversationContent = (user_id) => {
  return (
    <>
      <div className={styles.conversation_container}>
        <img
          className={styles.conversation_container_img}
          src={avatar}
          alt="avatar"
        />
        <div className={styles.conversation_container_item_message}>
          <h3>{user_id.user_id}</h3>
          <div className={styles.conversation_container_message}>
            {user_id.text}
          </div>
        </div>
      </div>
      <br></br>
    </>
  )
}

export default ConversationContent
