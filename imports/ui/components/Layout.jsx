import React from 'react'
import {Layout as AntLayout} from 'antd'
import SideMenu from '../components/SideMenu'
import Footer from '../components/Footer'
import MobileMenu from './MobileMenu'
const {Content} = AntLayout
const isMobile = window.innerWidth < 480

const mainEditor = {
  backgroundColor: '#fff',
  minHeight: 'auto',
}

const test = {
  height: '100%',
}

const Layout = ({children, ...props}) => (
  <AntLayout style={test}>
    {isMobile ? <MobileMenu /> : <SideMenu />}
    <AntLayout style={mainEditor}>
      <Content>{children}</Content>
      <Footer />
    </AntLayout>
  </AntLayout>
)

export default Layout
