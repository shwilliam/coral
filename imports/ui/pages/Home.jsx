import React from 'react'
import {withUser} from '../hocs'
import {AuthForm, NewNoteForm} from '../components'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Home = ({user}) => (
  <>
    <AuthForm />
    {user ? (
      <>
        <NewNoteForm />
        <Header />
        <SideMenu />
        <Footer />
      </>
    ) : (
      <div>loading...</div>
    )}
  </>
)

export default withUser(Home)
