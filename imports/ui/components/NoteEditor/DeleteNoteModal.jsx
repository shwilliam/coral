import React from 'react'
import {Modal, Button} from 'antd'

const {confirm} = Modal
import {Icon} from 'antd'

const DeleteNoteModal = ({onClick, ...props}) => {
  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure you want to delete this note?',
      content: 'This cannot be undone.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log(onClick)
      },
    })
  }
  return (
    <Button onClick={showDeleteConfirm} type="dashed">
      <Icon type="delete" />
    </Button>
  )
}

export default DeleteNoteModal
