import React, {useState} from 'react'
import {Meteor} from 'meteor/meteor'
import {withTracker} from 'meteor/react-meteor-data'
import Notes from '../../api/notes'

export default withTracker(() => ({
  user: Meteor.user(),
}))(({user, ...props}) => {
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
})
