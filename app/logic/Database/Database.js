const { Pool } = require('pg');

export default class Database {
  static pool = new Pool({
    user: 'diigkvpikohese',
    host: 'ec2-54-247-118-139.eu-west-1.compute.amazonaws.com',
    database: 'd4942nleq7in6v',
    password:
      'd63fc75a0c5568bf1452d2aeb21c361fc556de7d43590ab00016459d39b43ee5',
    port: 5432
  });

  static connect() {
    this.pool.connect((err, client, done) => {
      if (err) throw err;
      else console.log('SUC');
    });
  }
}
