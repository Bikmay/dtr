import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import OrdersPage from './containers/OrdersPage';
import SidebarPage from './containers/SidebarPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.ORDERS} component={OrdersPage} />
    </Switch>
  </App>
);
