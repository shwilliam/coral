import React, {useState} from 'react'
import Notes from '../../api/notes'
import {withUser} from '../hocs'

const NewNoteForm = ({user, ...props}) => {
  const [title, setTitle] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    Notes.insert({title, author: user._id})
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

export default withUser(NewNoteForm)
