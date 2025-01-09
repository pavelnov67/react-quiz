import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { base_URL } from '../../../variables/vars'
import styles from '../../ui.module.css'
import ConversationContent from './ConversationContent'

const ConversationItemContainer = ({
  id,
  conversation_id,
  text,
  user_id,
  date,
}) => {
  const [contentData, setContentData] = useState([])

  useEffect(() => {
    const fetchContentData = async () => {
      try {
        const data = await axios.get(
          `${base_URL}/vk/messages_list?conversation_id=${conversation_id}`
        )
        setContentData(data.data.data.vk_messages)
      } catch (err) {
        toast.error(err.message)
      }
    }
    fetchContentData()
  }, [])

  return (
    <div>
      <p>date: {date}</p>
      <h3>conversation_id: {conversation_id}</h3>
      <br></br>
      {contentData.map((vkMessage) => (
        <ConversationContent key={vkMessage.id} {...vkMessage} />
      ))}
      <hr></hr>
    </div>
  )
}

export default ConversationItemContainer
