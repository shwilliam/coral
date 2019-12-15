import React from 'react'
import {Icon} from 'antd'

const DeleteNoteBtn = ({onClick, ...props}) => {
  return (
    <button onClick={onClick} {...props}>
      <Icon type="delete" />
    </button>
  )
}

export default DeleteNoteBtn
