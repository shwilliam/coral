import React from 'react'
import Notes from './Notes'
import 'antd/dist/antd.css' // TODO: use modularized styles
import { Menu, Icon, Layout } from 'antd'
import AuthForm from './AuthForm'

const { SubMenu } = Menu
const { Sider } = Layout

const SideMenu = () => {
  const handleClick = e => {
    console.log('click ', e)
  }

  return (
    <Layout>
      <Sider>
        <Menu
          onClick={handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="book" theme='twoTone' />
                <span>Notes</span>
              </span>
            }
          >
            <Menu.Item>
              <h1>fake note</h1>
            </Menu.Item>
            <Menu.Item>
              <h1>fake note #2  </h1>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </Layout>
  )
}

export default SideMenu