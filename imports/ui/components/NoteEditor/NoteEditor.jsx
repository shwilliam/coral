import React, {useState, useEffect} from 'react'
import {Meteor} from 'meteor/meteor'
import {withNote} from '../../hocs'
import Editor from './Editor.jsx'
import DeleteButton from './DeleteButton.jsx'

const NoteEditor = ({note, ...props}) => {
  const [content, setContent] = useState()

  useEffect(() => {
    if (note && note.content) setContent(JSON.parse(note.content))
  }, [note])

  if (!note) return null
  return (
    <>
      <DeleteButton />
      <Editor
        value={content}
        onChange={d =>
          Meteor.call('notes.edit', note._id, JSON.stringify(d)) ||
          setContent(d) ||
          console.log(JSON.stringify(d))
        }
        {...props}
      />
    </>
  )
}

export default withNote(NoteEditor)
