import React from 'react'
import {
  Header,
  Showcase,
  Features,
  Developers,
  Footer,
} from '../components/Landing/'
import {BackTop} from 'antd'
import {Divider} from 'antd'

const Welcome = () => {
  return (
    <>
      <BackTop />
      <Header />
      <Showcase />
      <Divider />
      <Features />
      <Divider />
      <Developers />
      <Divider />
      <Footer />
    </>
  )
}

export default Welcome
