import React, {useState} from 'react'
import {Meteor} from 'meteor/meteor'
import {Accounts} from 'meteor/accounts-base'
import {useFormik} from 'formik'

const onAuth = e => {
  if (e) alert(e)
  alert('logged in')
  // TODO: clear form
}

const Field = ({id, label, name, type, ...props}) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input id={id} name={name} type={type} {...props} />
  </>
)

const AuthForm = props => {
  const [isSignUp, setIsSignUp] = useState(false)
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: ({username, email, password}) => {
      isSignUp
        ? Accounts.createUser({username, email, password}, onAuth)
        : Meteor.loginWithPassword(email, password, onAuth)
    },
    // TODO: validate
  })
  return (
    <form onSubmit={formik.handleSubmit} {...props}>
      {isSignUp ? (
        <Field
          label="Username"
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      ) : null}

      <Field
        label="Email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <Field
        label="Password"
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      {isSignUp ? (
        <Field
          label="Confirm password"
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.passwordConfirm}
        />
      ) : null}

      <button type="submit">Submit</button>

      <button onClick={() => setIsSignUp(s => !s)} type="button">
        {isSignUp ? 'Already have an account' : 'Create an account'}
      </button>
    </form>
  )
}

export default AuthForm
