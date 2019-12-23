import React from 'react'
import {Meteor} from 'meteor/meteor'
import {Modal, Button} from 'antd'

const DeleteNoteButton = ({
  noteId,
  collaborators,
  type = 'danger',
  icon = 'delete',
  children,
  ...props
}) => {
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
    <Button onClick={onDelete} type={type} icon={icon} {...props}>
      {children}
    </Button>
  )
}

export default DeleteNoteButton
