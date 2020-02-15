const sqlite3 = require('sqlite3').verbose();
const path = require('path');

export class OrdersTable{

    path : string;
    
    constructor(){
        this.path =  path.resolve(__dirname,'test.db');
    }

    private connection(){
        return db = new sqlite3.Database(this.path,sqlite3.OPEN_READWRITE,(err)=>{
            if(err){
                console.log(err.message);
            }
        })

        console.log("Connection sucsessfull")
    }

    createTable(){
        let db = this.connection();
        let sql = 'create table orders(primary key id integer, name text, desc text)';

        this.db.run(sql,[],(err)=>{
            if(err){
                console.log(err.message);
            }
            console.log("suc creating orders table");
        })
    }
}

export {OederTable};