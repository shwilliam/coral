import React, {useState} from 'react'
import {Meteor} from 'meteor/meteor'
import {Accounts} from 'meteor/accounts-base'
import {Form, Icon, Input, Button} from 'antd'
import {css} from 'aphrodite'
import styles from './AuthForm.styles'

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
    <Form onSubmit={onSubmit} {...props} className={css(styles.form)}>
      {isSignUp ? (
        <FormField
          aria-label="Username"
          title="Username"
          name="username"
          rules={[
            {required: true, message: 'Please choose a username'},
          ]}
          Icon={
            <Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />
          }
          form={form}
          className={css(styles.input)}
        />
      ) : null}

      <FormField
        aria-label="Email"
        title="Email"
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
        className={css(styles.input)}
      />

      <FormField
        aria-label="Password"
        title="Password"
        name="password"
        type="password"
        placeholder="Password"
        rules={[
          {required: true, message: 'Please enter your password'},
        ]}
        Icon={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
        form={form}
        className={css(styles.input)}
      />

      {isSignUp ? (
        <FormField
          aria-label="Confirm password"
          title="Confirm password"
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
          className={css(styles.input)}
        />
      ) : null}

      <Form.Item>
        <Button
          className={css(styles.button)}
          type="primary"
          htmlType="submit"
        >
          {!isSignUp ? 'Log in' : 'Sign up'}
        </Button>
        <div
          style={{
            borderBottom: '1px solid #dbdee0',
            margin: '15px 10px',
          }}
        ></div>
        {!isSignUp ? (
          <span>Don't have an account?</span>
        ) : (
          <span>Already have an account?</span>
        )}

        <Button type="link" onClick={() => setIsSignUp(s => !s)}>
          {isSignUp ? 'Log in' : 'Sign up'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Form.create({name: 'auth-form'})(AuthForm)
