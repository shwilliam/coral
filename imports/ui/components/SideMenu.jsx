import React from 'react'
// import Notes from './Notes'
import 'antd/dist/antd.css' // TODO: use modularized styles
import { Menu, Icon, Layout } from 'antd'

const { Sider } = Layout

const SideMenu = () => {

  return (
    <Layout>
      <Sider
        /* theme='light' */
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme='dark' mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">Notes</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  )
}

export default SideMenu