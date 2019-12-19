import React, {useState} from 'react'
import 'antd/dist/antd.css'
import {Meteor} from 'meteor/meteor'
import {Button, Modal, Form, Input} from 'antd'
import {message} from 'antd'

const CollectionCreateForm = Form.create({name: 'change-password'})(
  ({visible, onCancel, form}) => {
    const {getFieldDecorator} = form
    const onSave = () => {
      form.validateFields((err, {newPassword}) => {
        if (err) {
          return
        }
        Meteor.call('users.changePassword', newPassword)
        message.success(
          'Your password has successfully been changed!',
        )
        onCancel()
      })
    }

    return (
      <Modal
        visible={visible}
        title="Change your password"
        okText="Change"
        onCancel={onCancel}
        onOk={onSave}
      >
        <Form layout="vertical">
          <Form.Item label="New Password">
            {getFieldDecorator('newPassword', {
              rules: [
                {
                  required: true,
                  message: 'Please input the new password',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Confirm Password">
            {getFieldDecorator('confirmPassword', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password',
                },
                {
                  validator: (rule, value, callback) => {
                    if (
                      value &&
                      value !== form.getFieldValue('newPassword')
                    ) {
                      callback('Ensure your passwords match')
                    } else {
                      callback()
                    }
                  },
                },
              ],
            })(<Input />)}
          </Form.Item>
        </Form>
      </Modal>
    )
  },
)

const ChangePasswordForm = props => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        Change Password
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCancel={() => setVisible(false)}
      />
    </div>
  )
}

export default ChangePasswordForm
