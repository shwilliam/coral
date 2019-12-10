import React from 'react'
import { withUser } from '../hocs'
import { AuthForm, NewNoteForm, Notes } from '../components'

const Home = ({ user }) => (
  <>
    <AuthForm />
    {user ? (
      <>
        <NewNoteForm />
        <Notes />
      </>
    ) : null}
  </>
)

export default withUser(Home)
