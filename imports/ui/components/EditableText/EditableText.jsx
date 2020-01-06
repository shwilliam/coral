import React from 'react'
import {Meteor} from 'meteor/meteor'
import {useTheme} from '../../hooks'
import {Icon, Typography, message} from 'antd'
const {Paragraph} = Typography
import {textDarkBg} from './EditableText.styles'

const EditableText = ({
  iconType,
  value,
  onSave,
  type = 'text',
  ...props
}) => {
  const [theme] = useTheme()
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
      type={type}
      editable={{onChange: onUpdate}}
      style={theme === 'dark' ? textDarkBg : {}}
      {...props}
    >
      <Icon style={{paddingRight: '0.5rem'}} type={iconType} />
      {value}
    </Paragraph>
  )
}

export default EditableText
