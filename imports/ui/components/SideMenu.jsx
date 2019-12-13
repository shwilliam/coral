import React, {useState} from 'react'
// import Notes from './Notes'
import {Menu, Icon, Layout} from 'antd'

const {Sider} = Layout

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      style={{ height: '100vh' }}
    >
      <div className="logo" />
      <Menu theme='dark' mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">Notes</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          <span className="nav-text">Notes</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />
          <span className="nav-text">Notes</span>
        </Menu.Item>
      </Menu>
    </Sider >
  )
}

export default SideMenu
