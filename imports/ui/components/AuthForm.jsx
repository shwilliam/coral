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

const forgotPassword = email => {
  const user = Accounts.findUserByEmail(email)
  // TODO handle error
  if (!user) return console.error('you need a user')

  console.log(user)
}

const Somethibg = props => {
  const [email, setEmail] = useState('')

  return (
    <>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        {...props}
      />
      <button onClick={() => forgotPassword(email)} type="button">
        forgotr
      </button>
    </>
  )
}

// Accounts.forgotPassword = (options, callback) => {
//   if (!options.email) {
//     return reportError(new Meteor.Error(400, "Must pass options.email"), callback);
//   }

//   if (callback) {
//     Accounts.connection.call("forgotPassword", options, callback);
//   } else {
//     Accounts.connection.call("forgotPassword", options);
//   }
// };

// Accounts.resetPassword = (token, newPassword, callback) => {
//   if (!token instanceof String) {
//     return reportError(new Meteor.Error(400, "Token must be a string"), callback);
//   }

//   if (!newPassword instanceof String) {
//     return reportError(new Meteor.Error(400, "Password must be a string"), callback);
//   }

//   if (!newPassword) {
//     return reportError(new Meteor.Error(400, "Password may not be empty"), callback);
//   }

//   Accounts.callLoginMethod({
//     methodName: 'resetPassword',
//     methodArguments: [token, Accounts._hashPassword(newPassword)],
//     userCallback: callback});
// };

// Accounts.onResetPasswordLink(callback) {
//   if (this._accountsCallbacks["reset-password"]) {
//     Meteor._debug("Accounts.onResetPasswordLink was called more than once. " +
//       "Only one callback added will be executed.");
//   }

//   this._accountsCallbacks["reset-password"] = callback;
// };

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
        <Button type="link" onClick={() => forgotPassword()}>
          tacos
        </Button>
        <Somethibg />
      </Form.Item>
    </Form>
  )
}

export default Form.create({name: 'auth-form'})(AuthForm)
