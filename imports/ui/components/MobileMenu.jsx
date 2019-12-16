import React from 'react'
const {SubMenu} = Menu
import {Menu, Icon} from 'antd'
import {withNotes} from '../hocs'

const MobileMenu = ({notes, sharedNotes, ...props}) => (
  <Menu
    theme="dark"
    style={{textAlign: 'center'}}
    onClick={() => console.log('hey')}
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
      <Menu.ItemGroup title="Item 1">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Item 2">
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>
  </Menu>
)

export default withNotes(MobileMenu)
