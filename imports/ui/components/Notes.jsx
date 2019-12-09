import React from 'react'
import {withTracker} from 'meteor/react-meteor-data'
import Notes from '../../api/notes'

export default withTracker(() => ({
  notes: Notes.find().fetch(),
}))(({notes, ...props}) => (
  <ul {...props}>
    {notes.map(({_id, title}) => (
      <li key={_id}>{title}</li>
    ))}
  </ul>
))
