import React from 'react'
import {withNotes} from '../hocs'

const Notes = ({notes, ...props}) => (
  <ul {...props}>
    {notes.map(({_id, title, author}) => (
      <li key={_id}>
        {title} [{author}]
      </li>
    ))}
  </ul>
)

export default withNotes(Notes)
