import React, {useEffect} from 'react'
import {Meteor} from 'meteor/meteor'
import {useHistory} from 'react-router'
import {AuthForm} from '../components'
import Logo from '../components/Logo'
import {css} from 'aphrodite'
import styles from '../components/AuthForm.styles'

const Auth = () => {
  const history = useHistory()
  useEffect(() => {
    if (Meteor.user() || Meteor.loggingIn()) history.push('/')
  }, [])

  return (
    <div className={css(styles.formContainer)}>
      <Logo />
      <AuthForm />
    </div>
  )
}

export default Auth
