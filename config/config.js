// config.js
const fs = require('fs')
const path = require('path')



module.exports = {
    development: {
      username: 'admin',
      password: 'root',
      database: 'admin',
      host: 'localhost',
      dialect: 'postgres'
    },
    // production: {
    //   username: 'doadmin',
    //   password: 'AVNS_1Xf4_6a1_TiyYHlQw81',
    //   database: 'defaultdb',
    //   host: 'private-db-postgresql-sgp1-05777-do-user-14661844-0.b.db.ondigitalocean.com',
    //   dialect: 'postgres',
    //   port: 25060,
    //   dialectOptions: {
    //     ssl: {
    //         ca: fs.readFileSync(path.resolve("config", "ca-certificate.crt"))  // Замените на путь к вашему сертификату
    //     }
    //   }
    // }
  };
  