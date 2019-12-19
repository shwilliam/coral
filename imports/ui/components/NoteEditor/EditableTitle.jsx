import React, {useState} from 'react'
import {Input, PageHeader, Button} from 'antd'
import DeleteNoteButton from '../DeleteNoteButton.jsx'

// TODO: refactor to NoteHeader component

const EditableTitle = ({noteId, value, ...props}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [input, setInput] = useState(value)

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
      onBack={window.history.back}
      title={
        isEditing ? (
          <form onSubmit={onSave}>
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </form>
        ) : (
          value
        )
      }
      subTitle={
        <Button onClick={isEditing ? onSave : toggleEdit} type="link">
          {isEditing ? 'save' : 'edit'}
        </Button>
      }
      extra={[
        <DeleteNoteButton key="note-delete" noteId={noteId} />,
        <Button key="note-share" onClick={() => console.log('share')}>
          Share
        </Button>,
        <Button
          key="note-save"
          onClick={() => console.log('save')}
          type="primary"
        >
          Save
        </Button>,
      ]}
      {...props}
    />
  )
}

export default EditableTitle
