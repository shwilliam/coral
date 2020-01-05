import React, {useState} from 'react'
import {Meteor} from 'meteor/meteor'
import {useHistory} from 'react-router'
import {Menu, Icon, Layout} from 'antd'
import {withNotes} from '../hocs'
import {activeNote} from '../../api/notes'

const SideMenu = ({notes, sharedNotes, favoriteNotes, ...props}) => {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(s => !s)
  const logout = () =>
    Meteor.logout(() => location.replace('/welcome'))

  return (
    <Layout.Sider
      collapsible
      collapsed={open}
      onCollapse={toggleMenu}
      style={{minHeight: '100vh'}}
      {...props}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item
          key="new-note"
          title="new-note"
          onClick={() => history.push('/')}
        >
          <span>
            <Icon type="plus-circle" theme="outlined" />
            <span>New Note</span>
          </span>
        </Menu.Item>
        {favoriteNotes.length > 0 ? (
          <Menu.SubMenu
            key="side-menu-favorites"
            title={
              <span>
                <Icon type="star" />
                <span>Favorites</span>
              </span>
            }
          >
            {favoriteNotes.map(({_id, title}) => (
              <Menu.Item
                key={_id}
                onClick={() => history.push(`/note/${_id}`)}
              >
                <span>{title}</span>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ) : null}
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
            <Menu.Item
              key={_id}
              onClick={() => {
                activeNote.set(`/note/${_id}`)
                history.push(`/note/${_id}`)
              }}
            >
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
          {sharedNotes.map(({_id, title}) => (
            <Menu.Item
              key={_id}
              onClick={() => history.push(`/note/${_id}`)}
            >
              <span>{title}</span>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
        <Menu.SubMenu
          key="side-menu-settings"
          title={
            <span>
              <Icon type="setting" />
              <span>Settings</span>
            </span>
          }
        >
          <Menu.Item
            key="profile"
            onClick={() => history.push('/profile')}
          >
            <Icon type="user" /> Profile
          </Menu.Item>
          <Menu.Item key="logout" onClick={logout}>
            <Icon type="logout" /> Logout
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>
  )
}

export default withNotes(SideMenu)
