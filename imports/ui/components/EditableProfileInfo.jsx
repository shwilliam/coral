import React from 'react'
import {Meteor} from 'meteor/meteor'
import {Icon, Typography} from 'antd'
const {Paragraph} = Typography
import {message} from 'antd'

const EditableProfileInfo = ({
  style,
  iconType,
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
      <Icon style={{paddingRight: '0.5rem'}} type={iconType} />
      {value}
    </Paragraph>
  )
}

export default EditableProfileInfo
