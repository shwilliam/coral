import React from 'react'
import {withUser} from '../hocs'
import {NewNoteForm, Layout} from '../components'

const Home = ({user}) => (
  <Layout>{user ? <NewNoteForm /> : <div>loading...</div>}</Layout>
)

export default withUser(Home)
