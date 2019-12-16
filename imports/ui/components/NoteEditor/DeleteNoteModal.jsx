import React from 'react'
import {Modal, Button} from 'antd'
import {Meteor} from 'meteor/meteor'
const {confirm} = Modal
import {withNote} from '../../hocs'
import {Icon} from 'antd'

const DeleteNoteModal = ({note, ...props}) => {
  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure you want to delete this note?',
      content: 'This cannot be undone.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        Meteor.call('notes.remove', note._id)
      },
    })
  }
  return (
    <Button onClick={showDeleteConfirm} type="dashed" {...props}>
      <Icon type="delete" />
    </Button>
  )
}

export default withNote(DeleteNoteModal)
