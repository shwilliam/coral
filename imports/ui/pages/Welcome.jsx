import React, {useEffect} from 'react'
import {Meteor} from 'meteor/meteor'
import {useHistory} from 'react-router'
import {AuthForm} from '../components'

const Welcome = () => {
  const history = useHistory()
  useEffect(() => {
    if (Meteor.user() || Meteor.loggingIn()) history.push('/')
  }, [])

  return <AuthForm />
}

export default Welcome
