// @flow
import React, { Component } from 'react';
import { Button } from 'antd';
// import styles from './Home.css';
import * as db from '../database/Database.ts';

type Props = {};

export default class Orders extends Component<Props> {
  props: Props;

  render() {
    return <Button onClick={db.connection}>Push to button</Button>;
  }
}
  