import React from 'react'
import {Meteor} from 'meteor/meteor'
import {useTheme} from '../../hooks'
import {Modal, Button} from 'antd'
import {buttonStyles} from './DeleteNoteButton.styles'

const DeleteNoteButton = ({
  noteId,
  collaborators,
  type = 'default',
  icon = 'delete',
  children,
  ...props
}) => {
  const [theme] = useTheme()
  const isCollaborator =
    collaborators && collaborators.includes(Meteor.userId())
  const showDeleteConfirm = () => {
    Modal.confirm({
      title: 'Are you sure you want to delete this note?',
      content: 'This cannot be undone.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        Meteor.call('notes.remove', noteId)
      },
    })
  }
  const removeUserAsCollaborator = () => {
    Meteor.call('notes.removeCollaborator', noteId)
  }
  const onDelete = () =>
    isCollaborator ? removeUserAsCollaborator() : showDeleteConfirm()

  return (
    <Button
      onClick={onDelete}
      icon={icon}
      type={type}
      style={buttonStyles[theme]}
      {...props}
    >
      {children}
    </Button>
  )
}

export default DeleteNoteButton
