import React from 'react'
import {Layout as AntLayout} from 'antd'
import {useTheme} from '../../hooks'
import SideMenu from '../SideMenu'
import MobileMenu from '../MobileMenu'
const {Content} = AntLayout
import {
  layoutContainerStyles,
  contentContainerStyles,
} from './Layout.styles'

const isMobile = window.innerWidth < 480

const Layout = ({children, ...props}) => {
  const [theme] = useTheme()

  return (
    <AntLayout
      style={
        theme === 'solarized' ? layoutContainerStyles.fullHeight : {}
      }
      {...props}
    >
      {isMobile ? <MobileMenu /> : <SideMenu />}
      <AntLayout style={contentContainerStyles[theme]}>
        <Content>{children}</Content>
      </AntLayout>
    </AntLayout>
  )
}

export default Layout
