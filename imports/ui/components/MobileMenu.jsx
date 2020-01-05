import React from 'react'
import {Menu, Icon} from 'antd'
import {useHistory} from 'react-router'
import {withNotes} from '../hocs'
import {Meteor} from 'meteor/meteor'
import {useTheme} from '../hooks'
import {activeNote} from '../../api/notes'
import {
  sideMenuLightStyles,
  sideMenuDarkStyles,
  sideMenuContentLightStyles,
  sideMenuContentDarkStyles,
} from './SideMenu/SideMenu.styles'

const MobileMenu = ({
  notes,
  sharedNotes,
  favoriteNotes,
  ...props
}) => {
  const [theme] = useTheme()
  const history = useHistory()
  const logout = () =>
    Meteor.logout(() => location.replace('/welcome'))
  return (
    <nav style={{textAlign: 'center'}}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={
          theme === 'light'
            ? sideMenuContentLightStyles
            : sideMenuContentDarkStyles
        }
      >
        <Menu.Item
          key="new-note"
          title="new-note"
          onClick={() => history.push('/')}
        >
          <Icon type="plus-circle" theme="outlined" />
        </Menu.Item>
        <Menu.SubMenu
          key="side-menu-favorites"
          title={<Icon type="star" />}
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
        <Menu.SubMenu
          key="side-menu-notes"
          title={<Icon type="edit" />}
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
          title={<Icon type="team" />}
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
          title={<Icon type="setting" />}
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
    </nav>
  )
}

export default withNotes(MobileMenu)
