import React, {useState, useEffect} from 'react'
import {Meteor} from 'meteor/meteor'
import Editor from './Editor.jsx'
import Header from './Header.jsx'
import ShareForm from './ShareForm.jsx'

const NoteEditor = ({note, ...props}) => {
  const [content, setContent] = useState()

  useEffect(() => {
    if (note && note.content) setContent(JSON.parse(note.content))
  }, [note])

  if (!note) return null
  return (
    <>
      <Header
        title={note.title}
        noteId={note._id}
        noteContent={content}
        collaborators={note.collaborators}
      />
      {note.author === Meteor.userId() ? (
        <ShareForm
          noteId={note._id}
          collaborators={note.collaborators}
          author={note.author}
        />
      ) : (
        `Shared between you and ${note.collaborators.length} other${
          note.collaborators.length > 1 ? 's' : ''
        }`
      )}
      <Editor
        id="note"
        value={content}
        onChange={d =>
          Meteor.call('notes.edit', note._id, JSON.stringify(d)) ||
          setContent(d)
        }
        {...props}
      />
    </>
  )
}

export default NoteEditor
