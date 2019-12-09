import React, {useState} from 'react'
import Notes from '../../api/notes'

const NewNoteForm = props => {
  const [title, setTitle] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    // TODO: insert with active user id as author
    Notes.insert({title})
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
