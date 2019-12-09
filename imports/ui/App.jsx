import React from 'react'
import {withUser} from './hocs'
import {AuthForm, NewNoteForm, Notes} from './components'

const App = ({user}) => (
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

export default withUser(App)
