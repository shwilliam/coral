import React from 'react'
import { Menu, Layout, Icon } from 'antd'
import AuthForm from './AuthForm'

const Header = () => {
  const { Header } = Layout
  const { SubMenu } = Menu
  return (
    <Header className="header">
      {/* <div className="logo">
        <h1>Logo</h1>
      </div> */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>

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