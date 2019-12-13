import React, {useState} from 'react'
import {withNote} from '../../hocs'
import Editor from './Editor.jsx'

const NoteEditor = ({note, ...props}) => {
  const [content, setContent] = useState((note && note.content) || [])

  console.log(note && note._id)

  if (!note) return null
  return <Editor value={content} onChange={setContent} {...props} />
}

export default withNote(NoteEditor)
