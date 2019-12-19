import React, {useState} from 'react'
import 'antd/dist/antd.css'
import {Button, Modal, Form, Input, Radio} from 'antd'

const CollectionCreateForm = Form.create({name: 'form_in_modal'})(
  ({visible, onCancel, form}) => {
    const {getFieldDecorator} = form

    const onSave = () => {
      form.validateFields((err, values) => {
        if (err) {
          return
        }

        console.log('Received values of form: ', values)
        form.resetFields()
        // setVisible(false);
      })
    }

    return (
      <Modal
        visible={visible}
        title="Create a new collection"
        okText="Create"
        onCancel={onCancel}
        onOk={onSave}
      >
        <Form layout="vertical">
          <Form.Item label="Title">
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Please input the title of collection!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Description">
            {getFieldDecorator('description')(
              <Input type="textarea" />,
            )}
          </Form.Item>
          <Form.Item className="collection-create-form_last-form-item">
            {getFieldDecorator('modifier', {
              initialValue: 'public',
            })(
              <Radio.Group>
                <Radio value="public">Public</Radio>
                <Radio value="private">Private</Radio>
              </Radio.Group>,
            )}
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
      <Button type="primary" onClick={() => setVisible('banana')}>
        New Collection
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCancel={() => setVisible(false)}
      />
    </div>
  )
}

export default ChangePasswordForm
