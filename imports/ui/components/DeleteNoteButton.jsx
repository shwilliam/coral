import React from 'react'
import {Meteor} from 'meteor/meteor'
import {Modal, Button, Icon} from 'antd'

const DeleteNoteButton = ({noteId, ...props}) => {
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
    <Button onClick={showDeleteConfirm} {...props}>
      <Icon type="delete" />
    </Button>
  )
}

export default DeleteNoteButton
