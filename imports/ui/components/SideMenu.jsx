import React, {useState} from 'react'
import {Menu, Icon, Layout} from 'antd'
import {withNotes} from '../hocs'

const SideMenu = ({notes, ...props}) => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(s => !s)

  return (
    <Layout.Sider
      collapsible
      collapsed={open}
      onCollapse={toggleMenu}
      style={{minHeight: '100vh'}}
      {...props}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.SubMenu
          key="side-menu-notes"
          title={
            <span>
              <Icon type="edit" />
              <span>My Notes</span>
            </span>
          }
        >
          {notes.map(({_id, title}) => (
            <Menu.Item key={_id}>
              <span>{title}</span>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
        <Menu.SubMenu
          key="side-menu-shared"
          title={
            <span>
              <Icon type="team" />
              <span>Shared Notes</span>
            </span>
          }
        >
          hello
        </Menu.SubMenu>
        <Menu.Item key="side-menu-settings">Settings</Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

export default withNotes(SideMenu)
