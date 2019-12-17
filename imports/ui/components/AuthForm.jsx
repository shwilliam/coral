import React, {useState} from 'react'
import {Meteor} from 'meteor/meteor'
import {Accounts} from 'meteor/accounts-base'
import {Form, Icon, Input, Button} from 'antd'

const onAuth = e => {
  if (e) alert(e)
  location.replace('/')
}

const FormField = ({
  label,
  name,
  type = 'text',
  form,
  rules,
  Icon,
  ...props
}) => (
  <Form.Item label={label}>
    {form.getFieldDecorator(name, {
      rules,
    })(
      <Input
        name={name}
        type={type}
        prefix={Icon}
        placeholder="Username"
        {...props}
      />,
    )}
  </Form.Item>
)

const AuthForm = ({form, ...props}) => {
  const [isSignUp, setIsSignUp] = useState(false)
  const onSubmit = e => {
    e.preventDefault()
    form.validateFields((err, {username, email, password}) => {
      if (!err) {
        isSignUp
          ? Accounts.createUser({username, email, password}, onAuth)
          : Meteor.loginWithPassword(email, password, onAuth)
      }
    })
  }

  return (
    <Form onSubmit={onSubmit} {...props}>
      {isSignUp ? (
        <FormField
          label="Username"
          name="username"
          rules={[
            {required: true, message: 'Please choose a username'},
          ]}
          Icon={
            <Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />
          }
          form={form}
        />
      ) : null}

      <FormField
        label="Email"
        name="email"
        placeholder="Email"
        rules={[
          {
            type: 'email',
            message: 'Please enter a valid email',
          },
          {
            required: true,
            message: 'Please enter your email',
          },
        ]}
        Icon={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}} />}
        form={form}
      />

      <FormField
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
        rules={[
          {required: true, message: 'Please enter your password'},
        ]}
        Icon={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
        form={form}
      />

      {isSignUp ? (
        <FormField
          label="Confirm password"
          name="passwordConfirm"
          type="password"
          placeholder="Confirm Password"
          rules={[
            {
              required: true,
              message: 'Please confirm your password',
            },
            {
              validator: (rule, value, callback) => {
                if (
                  value &&
                  value !== form.getFieldValue('password')
                ) {
                  callback('Ensure your passwords match')
                } else {
                  callback()
                }
              },
            },
          ]}
          Icon={
            <Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />
          }
          form={form}
        />
      ) : null}

      <Form.Item>
        <Button type="link" onClick={() => setIsSignUp(s => !s)}>
          {isSignUp ? 'Already have an account' : 'Create an account'}
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Form.create({name: 'auth-form'})(AuthForm)
