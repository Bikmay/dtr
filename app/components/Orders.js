// @flow
import React, { Component } from 'react';
import { Button } from 'antd';
// import styles from './Home.css';
import getExchangeRates from '../actions/executeExchangeRates';
import {OrdersTable} from '../db/dbClass'

type Props = {};

const sqlite3 = require('sqlite3').verbose();
const path = require('path');


export default class Orders extends Component<Props> {
  props: Props;

  render() {
    let obj = new OrdersTable();
    return <div>
    <Button onClick={obj.createTable}>Push to button for test</Button>;
    </div>
  }

  testFunc(){
  console.log("ent");
  const dbPath = path.resolve(__dirname,'test.db');
        let db = new sqlite3.Database(dbPath,(err)=>{
            console.log(err.message);
        });

        console.log('succsess');
  }
  
}
