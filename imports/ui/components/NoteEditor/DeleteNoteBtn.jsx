import React from 'react'
import {Icon} from 'antd'

const DeleteNoteBtn = () => {
  return (
    <button onClick={() => console.log('clicked')}>
      <Icon type="delete" />
    </button>
  )
}

export default DeleteNoteBtn
