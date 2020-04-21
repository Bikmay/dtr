// @flow
import React, { Component } from 'react';
import TableComponent from '../components/orders-tab/Table';
import Test from '../components/Test';

type Props = {};

export default class OrdersPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <TableComponent />
        <Test />
      </div>
    );
  }
}
