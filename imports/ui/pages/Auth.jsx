import React, {useEffect} from 'react'
import {Meteor} from 'meteor/meteor'
import {useHistory} from 'react-router'
import {AuthForm} from '../components'
import Logo from '../components/Logo'

const Auth = () => {
  const history = useHistory()
  useEffect(() => {
    if (Meteor.user() || Meteor.loggingIn()) history.push('/')
  }, [])

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Logo />
      <AuthForm />
    </div>
  )
}

export default Auth
