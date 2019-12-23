import React from 'react'
import {Meteor} from 'meteor/meteor'
import {Select, Form} from 'antd'
import {withUsers} from '../../hocs'
import {message} from 'antd'

const ShareForm = ({
  noteId,
  collaborators,
  author,
  users,
  form,
  ...props
}) => {
  const onChange = d => {
    Meteor.call(
      'notes.share',
      noteId,
      d.map(val => val.split(' ')[0]),
    )
    message.success('Note collaborators successfully updated')
  }

  return (
    <Form layout="horizontal" {...props}>
      <Form.Item labelCol={{span: 6}} wrapperCol={{span: 16}}>
        {form.getFieldDecorator('collaborators', {
          initialValue: collaborators
            ? collaborators.map(id => {
                const user = users.find(({_id}) => _id === id)
                if (!user) return

                return `${user._id} ${user.username}`
              })
            : [],
        })(
          <Select
            mode="multiple"
            style={{width: '100%'}}
            placeholder="Add some collaborators"
            optionLabelProp="label"
            onChange={onChange}
          >
            {users
              .filter(({_id}) => !(author === _id))
              .map(({_id, username}) => (
                <Select.Option
                  value={`${_id} ${username}`}
                  label={username}
                  key={_id}
                >
                  {username}
                </Select.Option>
              ))}
          </Select>,
        )}
      </Form.Item>
    </Form>
  )
}

export default Form.create({name: 'share-form'})(withUsers(ShareForm))
