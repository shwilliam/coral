import React from 'react'
import {withUser} from './hocs'
import {AuthForm, NewNoteForm, Notes} from './components'
import NoteTemplate from './components/NoteTemplate'

const App = ({user}) => (
  <>
    <AuthForm />
    {user ? (
      <>
        <NewNoteForm />
        <Notes />
        <NoteTemplate />
      </>
    ) : null}
  </>
)

export default withUser(App)
