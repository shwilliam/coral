import React from 'react'
import {Meteor} from 'meteor/meteor'
import {withTracker} from 'meteor/react-meteor-data'
import {AuthForm, NewNoteForm, Notes} from './components'

// TODO: refactor user HOC
export default withTracker(() => ({
  user: Meteor.user(),
}))(({user}) => (
  <>
    <AuthForm />
    {user ? (
      <>
        <NewNoteForm />
        <Notes />
      </>
    ) : null}
  </>
))
