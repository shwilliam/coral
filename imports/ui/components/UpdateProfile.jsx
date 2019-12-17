import React, {useState} from 'react'
import {Modal, Form, Input, Icon} from 'antd'

const CollectionCreateForm = Form.create({name: 'update_profile'})(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const {visible, onCancel, onUpdate, form} = this.props
      const {getFieldDecorator} = form
      return (
        <Modal
          visible={visible}
          title="Update your profile"
          okText="Update"
          onCancel={onCancel}
          onOk={onUpdate}
        >
          <Form layout="vertical">
            <Form.Item label="User Name">
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: false,
                    message: 'Please input your new username!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Email">
              {getFieldDecorator('email', {
                rules: [
                  {
                    required: false,
                    message: 'Please input your new email!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      )
    }
  },
)

const UpdateProfile = () => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const handleUpdate = () => {
    const {form} = this.formRef.props
    form.validateFields((err, values) => {
      if (err) {
        return
      }

      console.log('Received values of form: ', values)
      form.resetFields()
      setVisible(false)
    })
  }
  saveFormRef = formRef => {
    this.formRef = formRef
  }

  return (
    <div>
      <Icon onClick={showModal} type="edit" />
      <CollectionCreateForm
        wrappedComponentRef={saveFormRef}
        visible={visible}
        onCancel={handleCancel}
        onUpdate={handleUpdate}
      />
    </div>
  )
}

export default UpdateProfile
