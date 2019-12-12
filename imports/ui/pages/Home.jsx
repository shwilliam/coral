import React from 'react'
import { withUser } from '../hocs'
import { AuthForm, NewNoteForm } from '../components'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'

const Home = ({ user }) => (
  <>
    <AuthForm />
    {user ? (
      <>
        <NewNoteForm />
        <Header />
        <SideMenu />
      </>
    ) : null}
  </>
)

export default withUser(Home)
