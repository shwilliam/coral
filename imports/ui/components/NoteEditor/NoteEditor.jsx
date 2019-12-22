import React, {useState, useEffect} from 'react'
import {Meteor} from 'meteor/meteor'
import {usePdfDownload} from '../../hooks'
import Editor from './Editor.jsx'
import Header from './Header.jsx'
import ShareForm from './ShareForm.jsx'

const NoteEditor = ({note, ...props}) => {
  const [content, setContent] = useState()
  const downloadPdf = usePdfDownload()

  useEffect(() => {
    if (note && note.content) setContent(JSON.parse(note.content))
  }, [note])

  if (!note) return null
  return (
    <>
      <button onClick={() => downloadPdf(content)}>download</button>
      <Header noteId={note._id} value={note.title} />
      <ShareForm
        noteId={note._id}
        collaborators={note.collaborators}
        author={note.author}
      />
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
