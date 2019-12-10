import React, {useState} from 'react'
import {Meteor} from 'meteor/meteor'

const ShareNoteForm = ({noteId, ...props}) => {
  const [email, setEmail] = useState('')
  const shareItem = e => {
    e.preventDefault()
    Meteor.call('notes.share', noteId, email)
  }

  return (
    <form onSubmit={shareItem}>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter an email"
        type="text"
        required
      />
      <button type="submit">share</button>
    </form>
  )
}

export default ShareNoteForm
