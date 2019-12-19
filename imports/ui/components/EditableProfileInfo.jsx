import React, {useState} from 'react'
import {Meteor} from 'meteor/meteor'
import {Input, Icon, Button} from 'antd'

const EditableProfileInfo = ({value, onSave, type = 'text'}) => {
  const [isUpdating, setIsUpdating] = useState(false)
  const [input, setInput] = useState(value)
  const toggleUpdate = () => setIsUpdating(s => !s)

  const onUpdate = e => {
    e.preventDefault()
    if (!input.length) return

    Meteor.call(onSave, input)
    toggleUpdate()
  }

  return isUpdating ? (
    <form onSubmit={onUpdate}>
      <Input
        type={type}
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <Button htmlType="submit">
        <Icon type="save" />
      </Button>
      <Button onClick={toggleUpdate}>
        <Icon type="close" />
      </Button>
    </form>
  ) : (
    <>
      {value}
      <Button onClick={toggleUpdate}>
        <Icon type="edit" />
      </Button>
    </>
  )
}

export default EditableProfileInfo
