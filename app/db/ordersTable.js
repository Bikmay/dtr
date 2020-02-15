const sqlite3 = require('sqlite3').verbose();
const path = require('path');

export class OrdersTable{

    constructor(){
        let dbPath = path.resolve(__dirname,'test.db');
        
        var db = new sqlite3.Database(dbPath,sqlite3.OPEN_READWRITE,(err)=>{
            if(err){
                console.log(err.message);
            }
        });

        console.log('Connection sucsessfull');
    }

   static createTable(){
    let dbPath = path.resolve(__dirname,'test.db');
        
    var db = new sqlite3.Database(dbPath,sqlite3.OPEN_READWRITE,(err)=>{
        if(err){
            console.log(err.message);
        }
    });

    console.log('Connection sucsessfull');
        
        let sql = 'create table orders(primary key id integer, name text, desc text)';
        db.run(sql,[],(err)=>{
            if(err){
                console.log(err.message);
            }
            console.log("suc");
        })


    }

    
}   