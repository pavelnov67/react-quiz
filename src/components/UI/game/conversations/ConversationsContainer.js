import { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import ConversationItemContainer from './ConversationItemContainer '
import { base_URL } from '../../../variables/vars'
import styles from '../../ui.module.css'

const ConversationsContainer = () => {
  const [conversationData, setConvesationData] = useState([])

  useEffect(() => {
    const fetchConversationsData = async () => {
      try {
        const data = await axios.get(`${base_URL}/vk/conversations_list`)
        setConvesationData(data.data.data.vk_messages)
      } catch (err) {
        toast.error(err.message)
      }
    }
    fetchConversationsData()
  }, [])
  return (
    <div className={styles.blitz_container}>
      <h3 className={styles.head_name}>Чаты</h3>
      <ToastContainer position="bottom-right" autoClose={2000} />
      {conversationData.map((conversation) => (
        <ConversationItemContainer key={conversation.id} {...conversation} />
      ))}
    </div>
  )
}

export default ConversationsContainer
