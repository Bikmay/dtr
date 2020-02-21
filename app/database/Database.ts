const sqlite3 = require('sqlite3').verbose();

export class Database
{

  connection(){
    let db = new sqlite3.Database('../data/test.db',(err)=>{
      if(err){
        return console.error(err.message);
      }
      console.log('Connect succsesful');
    });

    db.close();

  }

}

export * from '../components/Orders'
