import React from 'react'
import { withUser } from '../hocs'
import { AuthForm, NewNoteForm } from '../components'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import { Layout } from 'antd'

const Home = ({ user }) => (
  <>
    <AuthForm />
    {user ? (
      <>
        <NewNoteForm />
        {/* <Layout> */}
        <Header />
        <SideMenu />
        {/* </Layout> */}
      </>
    ) : null}
  </>
)

export default withUser(Home)
