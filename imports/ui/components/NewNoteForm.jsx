import React, {useState} from 'react'
import {Meteor} from 'meteor/meteor'

const NewNoteForm = props => {
  const [title, setTitle] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    Meteor.call('notes.insert', title)
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        type="input"
      />
      <button type="submit">create</button>
    </form>
  )
}

export default NewNoteForm
