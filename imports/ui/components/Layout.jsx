import React from 'react'
import {Layout as AntLayout} from 'antd'
import SideMenu from '../components/SideMenu'
import Footer from '../components/Footer'
import MobileMenu from './NoteEditor/MobileMenu'
const {Content} = AntLayout

const mobile = '414px'

const Layout = ({children, ...props}) => (
  <AntLayout>
    {/* <SideMenu /> */}
    <MobileMenu />
    <AntLayout>
      <Content>{children}</Content>
      <Footer />
    </AntLayout>
  </AntLayout>
)

export default Layout
