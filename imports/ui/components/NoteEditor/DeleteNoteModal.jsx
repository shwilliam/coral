import React from 'react'
import {Modal, Button} from 'antd'
import DeleteNoteModal from './DeleteNoteModal'
const {confirm} = Modal
import {Icon} from 'antd'

const DeleteNoteModal = ({notes}) => {
  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure you want to delete this note?',
      content: 'This cannot be undone.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {

      },
    })
  }
  return (
    <Button onClick={showDeleteConfirm} type="dashed">
      <Icon type="delete" />
    </Button>
  )
}

export default withNotes(DeleteNoteModal)
