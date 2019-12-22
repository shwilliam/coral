import React from 'react'
import {Meteor} from 'meteor/meteor'
import {Modal, Button, Icon} from 'antd'

const DeleteNoteButton = ({
  noteId,
  type = 'danger',
  icon = 'delete',
  children,
  ...props
}) => {
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

  return (
    <Button
      onClick={showDeleteConfirm}
      type={type}
      icon={icon}
      {...props}
    >
      {children}
    </Button>
  )
}

export default DeleteNoteButton
