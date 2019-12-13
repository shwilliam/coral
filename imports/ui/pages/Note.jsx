import React from 'react'
import { withUser } from '../hocs'
import SideMenu from '../components/SideMenu'
import NoteTemplate from '../components/NoteTemplate'
import { Layout } from 'antd'
const { Content } = Layout
const Note = ({ user }) => (
  <Layout>
    <SideMenu />
    {user ? (
      <Layout>
        <Content>
          <NoteTemplate />
        </Content>
      </Layout>
    ) : null}
  </Layout>
)

export default withUser(Note)
