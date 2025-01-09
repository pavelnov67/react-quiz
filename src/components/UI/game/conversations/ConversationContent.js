import React from 'react'

const ConversationContent = (user_id) => {
  return (
    <div>
      <p>
        {user_id.user_id} said: {user_id.text}
      </p>
      <br></br>
    </div>
  )
}

export default ConversationContent
