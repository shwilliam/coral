import React from 'react'
import {Meteor} from 'meteor/meteor'
import {useHistory} from 'react-router'
import {PageHeader, Button, Typography, message} from 'antd'
const {Paragraph} = Typography
import {usePdfDownload} from '../../../hooks'
import DeleteNoteButton from '../../DeleteNoteButton.jsx'
import FavoriteNoteButton from '../../FavoriteNoteButton.jsx'
const isMobile = window.innerWidth < 480
import styles from './Header.styles'
import {css} from 'aphrodite'

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
        <div className={css(styles.menu)}>
          <DeleteNoteButton
            key="note-delete"
            noteId={noteId}
            collaborators={collaborators}
            type="default"
          />

          <FavoriteNoteButton key="note-favorite" noteId={noteId} />
          <Button
            key="note-download"
            onClick={() => downloadPdf(noteContent)}
            type="primary"
          >
            {isMobile ? 'PDF' : 'Save as PDF'}
          </Button>
        </div>,
      ]}
      {...props}
    />
  )
}

export default Header
