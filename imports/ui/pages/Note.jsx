import React from 'react'
import { withUser } from '../hocs'
import SideMenu from '../components/SideMenu'
import NoteTemplate from '../components/NoteTemplate'
import { Layout } from 'antd'
import Copyright from '../components/Copyright'
const { Content } = Layout
const Note = ({ user }) => (
  <Layout>
    <SideMenu />
    {user ? (
      <Layout>
        <Content>
          <NoteTemplate />
        </Content>
        <Copyright />
      </Layout>
    ) : null}
  </Layout>
)

export default withUser(Note)
