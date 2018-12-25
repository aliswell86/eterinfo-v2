import React from 'react';
import {
  Menu, Dropdown, Button, Icon, message,
} from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
    <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
    <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
  </Menu>
);

const DropdownButton = () => {
  return (
    <div>
      <Dropdown overlay={menu}>
        <Button style={{ marginLeft: 8 }}>
          Button <Icon type="down" />
        </Button>
      </Dropdown>
    </div>
  );
};

export default DropdownButton;