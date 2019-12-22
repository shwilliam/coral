import React, {useState} from 'react'
import Meteor from 'meteor/meteor'
import {useHistory} from 'react-router'
import {Input, PageHeader, Button} from 'antd'
import {usePdfDownload} from '../../hooks'
import DeleteNoteButton from '../DeleteNoteButton.jsx'
import FavoriteNoteButton from '../FavoriteNoteButton.jsx'

// TODO: refactor EditableTitle component

const Header = ({noteId, noteContent, title, ...props}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [input, setInput] = useState(title)
  const history = useHistory()
  const downloadPdf = usePdfDownload()

  const toggleEdit = () => setIsEditing(s => !s)

  const onSave = e => {
    if (!input.length) return

    Meteor.call('notes.updateTitle', noteId, input)
    toggleEdit()
    e.preventDefault()
  }

  return (
    <PageHeader
      style={{
        border: '1px solid rgb(235, 237, 240)',
      }}
      onBack={() => history.push('/')}
      title={
        isEditing ? (
          <form onSubmit={onSave}>
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </form>
        ) : (
          title
        )
      }
      subTitle={
        <Button onClick={isEditing ? onSave : toggleEdit} type="link">
          {isEditing ? 'save' : 'edit'}
        </Button>
      }
      extra={[
        <DeleteNoteButton
          key="note-delete"
          noteId={noteId}
          type="default"
        />,
        <FavoriteNoteButton key="note-favorite" noteId={noteId} />,
        <Button
          key="note-download"
          onClick={() => downloadPdf(noteContent)}
          type="primary"
        >
          Save as PDF
        </Button>,
      ]}
      {...props}
    />
  )
}

export default Header
