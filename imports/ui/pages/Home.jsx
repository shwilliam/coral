import React from 'react'
import {Layout, Splash, Tutorial} from '../components'

const Home = () => (
  <Layout>
    <Tutorial />
    <Splash>
      Create or select a note from the menu to get started.
    </Splash>
  </Layout>
)

export default Home
