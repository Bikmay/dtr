// @flow
import React, { Component } from 'react';
import { Button } from 'antd';
// import styles from './Home.css';
import getExchangeRates from '../actions/executeExchangeRates';
<<<<<<< HEAD
import {OrdersTable} from '../db/dbClass'

type Props = {};

const sqlite3 = require('sqlite3').verbose();
const path = require('path');


=======

type Props = {};

>>>>>>> 2dfcfc6694269c7cafeb24463636bb7e8019f8cb
export default class Orders extends Component<Props> {
  props: Props;

  render() {
<<<<<<< HEAD
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
  
=======
    return <Button onClick={getExchangeRates()}>s</Button>;
  }
>>>>>>> 2dfcfc6694269c7cafeb24463636bb7e8019f8cb
}
