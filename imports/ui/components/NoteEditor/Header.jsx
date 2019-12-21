import React, {useState} from 'react'
import {Input, PageHeader, Button} from 'antd'
import DeleteNoteButton from '../DeleteNoteButton.jsx'
import FavoriteNoteButton from '../FavoriteNoteButton.jsx'
import {useHistory} from 'react-router'

// TODO: refactor EditableTitle component

const Header = ({noteId, value, ...props}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [input, setInput] = useState(value)
  const history = useHistory()
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
        <FavoriteNoteButton key="note-favorite" noteId={noteId} />,
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

export default Header
