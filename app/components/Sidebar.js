import 'antd/dist/antd.css';

import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import styles from './Sidebar.css';
import SidebarPage from '../containers/SidebarPage';

const { Header, Content, Footer, Sider } = Layout;

export default class Sidebar extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <Layout>
        <Sider collapsed="true">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <span className="nav-text">Orders</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span className="nav-text">Clients</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    );
  }
}
