import React from 'react'
import {Meteor} from 'meteor/meteor'
import {useHistory} from 'react-router'
import {css} from 'aphrodite'
import {useTheme} from '../../../hooks'
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
  const [theme] = useTheme()
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
          className={
            theme === 'dark'
              ? css([styles.title, styles.titleDark])
              : css(styles.title)
          }
        >
          {title}
        </Paragraph>
      }
      extra={[
        <div key="note-actions" className={css(styles.menu)}>
          <DeleteNoteButton
            key="note-delete"
            noteId={noteId}
            collaborators={collaborators}
            className={css(styles.menuButton)}
          />
          <FavoriteNoteButton
            key="note-favorite"
            noteId={noteId}
            className={css(styles.menuButton)}
          />
          <DownloadNoteButton
            key="note-download"
            noteContent={noteContent}
            className={css(styles.menuButton)}
          />
        </div>,
      ]}
      {...props}
    />
  )
}

export default Header
