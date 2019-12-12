import React from 'react'
import { withUser } from '../hocs'
import { AuthForm, NewNoteForm } from '../components'
import SideMenu from '../components/SideMenu'

const Home = ({ user }) => (
  <>
    <AuthForm />
    {user ? (
      <>
        <NewNoteForm />
        <SideMenu />
      </>
    ) : null}
  </>
)

export default withUser(Home)
