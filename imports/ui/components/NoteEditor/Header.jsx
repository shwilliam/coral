import React from 'react'
import {Meteor} from 'meteor/meteor'
import {useHistory} from 'react-router'
import {PageHeader, Button, Typography, message} from 'antd'
const {Paragraph} = Typography
import {usePdfDownload} from '../../hooks'
import DeleteNoteButton from '../DeleteNoteButton.jsx'
import FavoriteNoteButton from '../FavoriteNoteButton.jsx'

const headerStyles = {
  width: '95%',
  margin: '0 auto',
}

const Header = ({
  noteId,
  noteContent,
  title,
  collaborators,
  ...props
}) => {
  const history = useHistory()
  const downloadPdf = usePdfDownload()

  const onSave = newTitle => {
    if (!newTitle.length) {
      message.error("Title can't be blank")
      return
    }
    Meteor.call('notes.updateTitle', noteId, newTitle)
    message.success('Title successfully updated!')
  }

  return (
    <PageHeader
      style={headerStyles}
      onBack={() => history.push('/')}
      title={
        <Paragraph editable={{onChange: onSave}}>{title}</Paragraph>
      }
      extra={[
        <DeleteNoteButton
          key="note-delete"
          noteId={noteId}
          collaborators={collaborators}
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
