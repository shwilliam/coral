import React from 'react'
import {Layout as AntLayout} from 'antd'
import {useTheme} from '../../hooks'
import SideMenu from '../SideMenu'
import Footer from '../Footer'
import MobileMenu from '../MobileMenu'
const {Content} = AntLayout
import {
  contentContainerLightStyles,
  contentContainerDarkStyles,
} from './Layout.styles'

const isMobile = window.innerWidth < 480

const Layout = ({children, ...props}) => {
  const [theme] = useTheme()

  return (
    <AntLayout {...props}>
      {isMobile ? <MobileMenu /> : <SideMenu />}
      <AntLayout
        style={
          theme === 'light'
            ? contentContainerLightStyles
            : contentContainerDarkStyles
        }
      >
        <Content>{children}</Content>
        <Footer />
      </AntLayout>
    </AntLayout>
  )
}

export default Layout
