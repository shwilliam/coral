import React from 'react'
import {Layout as AntLayout} from 'antd'
import SideMenu from '../components/SideMenu'
import Footer from '../components/Footer'
const {Content} = AntLayout

const Layout = ({children, ...props}) => (
  <AntLayout>
    <SideMenu />
    <AntLayout>
      <Content>{children}</Content>
      <Footer />
    </AntLayout>
  </AntLayout>
)

export default Layout
