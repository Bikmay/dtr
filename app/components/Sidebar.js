import 'antd/dist/antd.css';

import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Sidebar.css';
import routes from '../constants/routes.json';

const { Sider } = Layout;

export default class Sidebar extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <Layout>
        <Sider collapsed="true">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to={routes.ORDERS}>
                <span className="nav-text">Orders</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={routes.CLIENTS}>
                <span className="nav-text">Clients</span>
              </Link>
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
