import React from 'react'
import {Layout as AntLayout} from 'antd'
import SideMenu from '../components/SideMenu'
import Copyright from '../components/Copyright'
const {Content} = AntLayout

const Layout = ({children, ...props}) => (
  <AntLayout>
    <SideMenu />
    <AntLayout>
      <Content>{children}</Content>
      <Copyright />
    </AntLayout>
  </AntLayout>
)

export default Layout
