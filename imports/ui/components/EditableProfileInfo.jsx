import React, {useState} from 'react'
import {Meteor} from 'meteor/meteor'
import {Input, Icon, Button, Typography} from 'antd'
const {Paragraph} = Typography
import {message} from 'antd'

const EditableProfileInfo = ({
  style,
  value,
  onSave,
  type = 'text',
}) => {
  const onUpdate = newValue => {
    if (!newValue.length) {
      message.error("This field can't be empty!")
      return
    } else if (type === 'email' && !newValue.includes('@')) {
      message.error('Please include a valid email address')
      return
    } else {
      Meteor.call(onSave, newValue)
      message.success('Success!')
    }
  }
  return (
    <Paragraph
      style={style}
      type={type}
      editable={{onChange: onUpdate}}
    >
      {value}
    </Paragraph>
  )
}

export default EditableProfileInfo
