import React, {useState, forwardRef} from 'react'
import {Meteor} from 'meteor/meteor'
import {Accounts} from 'meteor/accounts-base'
import useForm from 'react-hook-form'

const onAuth = e => {
  if (e) alert(e)
  alert('logged in')
  // TODO: clear form
}

// TODO: handle error message in Field
const Field = forwardRef(
  ({label, name, type = 'text', ...props}, ref) => (
    <label>
      {label}
      <input name={name} type={type} ref={ref} {...props} />
    </label>
  ),
)

const AuthForm = props => {
  const [isSignUp, setIsSignUp] = useState(false)
  const {handleSubmit, register, errors, getValues} = useForm()

  const onSubmit = ({username, email, password}) => {
    isSignUp
      ? Accounts.createUser({username, email, password}, onAuth)
      : Meteor.loginWithPassword(email, password, onAuth)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...props}>
      {isSignUp ? (
        <>
          <Field
            label="Username"
            name="username"
            ref={register({required: true})}
          />
          {errors.username && errors.username.message}
        </>
      ) : null}

      <Field
        label="Email"
        name="email"
        ref={register({
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Invalid email',
          },
        })}
      />
      {errors.email && errors.email.message}

      <Field
        label="Password"
        name="password"
        type="password"
        ref={register({
          required: true,
        })}
      />
      {errors.password && errors.password.message}

      {isSignUp ? (
        <>
          <Field
            label="Confirm password"
            name="passwordConfirm"
            type="password"
            ref={register({
              required: true,
              validate: value => {
                const values = getValues()
                if (
                  value &&
                  values &&
                  values.password &&
                  value !== values.password
                )
                  return 'Ensure your passwords match'
              },
            })}
          />
          {errors.passwordConfirm && errors.passwordConfirm.message}
        </>
      ) : null}

      <button type="submit">Submit</button>

      <button onClick={() => setIsSignUp(s => !s)} type="button">
        {isSignUp ? 'Already have an account' : 'Create an account'}
      </button>
    </form>
  )
}

export default AuthForm
