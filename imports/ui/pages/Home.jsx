import React from 'react'
import { withUser } from '../hocs'
import { AuthForm, NewNoteForm } from '../components'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import Copyright from '../components/Copyright'
const Home = ({ user }) => (
  <>
    <AuthForm />
    {user ? (
      <>
        <NewNoteForm />
        <Header />
        <SideMenu />
        <Copyright />
      </>
    ) : <div>loading...</div>}
  </>
)

export default withUser(Home)
