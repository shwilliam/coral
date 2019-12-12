import React from 'react'
import { Menu, Icon } from 'antd';
import Notes from './Notes'
import 'antd/dist/antd.css' // TODO: use modularized styles

const { SubMenu } = Menu;

class SideMenu extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
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
            <Notes />
        </SubMenu>
      </Menu>
    );
  }
}

export default SideMenu