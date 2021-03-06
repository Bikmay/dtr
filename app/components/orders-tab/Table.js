// @flow
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

type Props = {};

export default class TableComponent extends Component<Props> {
  props: Props;

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Client',
        dataIndex: 'client',
        key: 'client'
      },
      {
        title: 'Type items',
        dataIndex: 'type_items',
        key: 'type_items'
      },
      {
        title: 'Count items',
        dataIndex: 'count_items',
        key: 'count_items'
      },
      {
        title: 'Cost of item',
        dataIndex: 'cost_item',
        key: 'cost_item'
      },
      {
        title: 'Orders cost',
        dataIndex: 'order_cost',
        key: 'order_cost'
      },
      {
        title: 'Priority',
        dataIndex: 'priority',
        key: 'priority'
      }
    ];
    const data = [
      {
        key: '1',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '2',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '3',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '4',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      }
    ];

    return <Table columns={columns} dataSource={data} size="small" />;
  }
}
