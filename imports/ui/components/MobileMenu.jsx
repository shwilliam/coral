import React from 'react'
const {SubMenu} = Menu
import {Menu, Icon} from 'antd'
import {withNotes} from '../hocs'
import {useHistory, useParams} from 'react-router'
import {Meteor} from 'meteor/meteor'

const MobileMenu = ({notes, sharedNotes, ...props}) => {
  const history = useHistory()
  const logout = () =>
    Meteor.logout(() => location.replace('/welcome'))
  return (
    <Menu
      theme="dark"
      style={{
        position: 'absolute',
        bottom: '0',
        width: '100%',
        textAlign: 'center',
      }}
      mode="horizontal"
    >
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="edit" />
          </span>
        }
      >
        <Menu.ItemGroup title="My Notes">
          {notes.map(({_id, title}) => (
            <Menu.Item key={_id}>
              <span>
                <a href={`/note/${_id}`}>{title}</a>
              </span>
            </Menu.Item>
          ))}
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="team" />
          </span>
        }
      >
        <Menu.ItemGroup title="Shared Notes">
          {sharedNotes.map(({_id, title}) => (
            <Menu.Item key={_id}>
              <span>
                <a href={`/note/${_id}`}>{title}</a>
              </span>
            </Menu.Item>
          ))}
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="setting" />
          </span>
        }
      >
        <Menu.ItemGroup title="Settings">
          <Menu.Item key="logout" onClick={logout}>
            <Icon type="logout" /> Logout
          </Menu.Item>
          <Menu.Item
            key="profile"
            onClick={() => history.push('/profile')}
          >
            <Icon type="user" /> Profile
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  )
}

export default withNotes(MobileMenu)
