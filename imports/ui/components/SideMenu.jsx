import React, {useState} from 'react'
import {Meteor} from 'meteor/meteor'
import {useHistory} from 'react-router'
import {Menu, Icon, Layout} from 'antd'
import {withNotes} from '../hocs'

const SideMenu = ({notes, sharedNotes, ...props}) => {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(s => !s)
  const logout = () => {
    Meteor.logout()
    history.push('/welcome')
  }

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
              <span>
                <a href={`/note/${_id}`}>{title}</a>
              </span>
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
          {sharedNotes.map(({_id, title}) => (
            <Menu.Item key={_id}>
              <span>
                <a href={`/note/${_id}`}>{title}</a>
              </span>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
        <Menu.SubMenu
          key="side-menu-settings"
          title={
            <span>
              <Icon type="user" />
              <span>Settings</span>
            </span>
          }
        >
          <Menu.Item key="logout" onClick={logout}>
            <span>Logout</span>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>
  )
}

export default withNotes(SideMenu)
