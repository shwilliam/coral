import React from 'react'
import {Meteor} from 'meteor/meteor'
import {useHistory} from 'react-router'
import {css} from 'aphrodite'
import {PageHeader, Typography, message} from 'antd'
const {Paragraph} = Typography
import DeleteNoteButton from '../../DeleteNoteButton'
import FavoriteNoteButton from '../../FavoriteNoteButton'
import DownloadNoteButton from '../../DownloadNoteButton'
import styles from './Header.styles'

const Header = ({
  noteId,
  noteContent,
  title,
  collaborators,
  ...props
}) => {
  const history = useHistory()

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
      className={css(styles.header)}
      onBack={() => history.push('/')}
      title={
        <Paragraph
          editable={{onChange: onSave}}
          className={css(styles.title)}
        >
          {title}
        </Paragraph>
      }
      extra={[
        <DeleteNoteButton
          key="note-delete"
          noteId={noteId}
          collaborators={collaborators}
        />,
        <FavoriteNoteButton key="note-favorite" noteId={noteId} />,
        <DownloadNoteButton
          key="note-download"
          noteContent={noteContent}
        />,
      ]}
      {...props}
    />
  )
}

export default Header
