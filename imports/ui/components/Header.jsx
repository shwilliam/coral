import React from 'react'
import { Menu, Layout, Icon } from 'antd'

const Header = () => {
  const { Header } = Layout
  const { SubMenu } = Menu
  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>Account</span>
            </span>
          }
        />
      </Menu>
    </Header>
  )
}

export default Header