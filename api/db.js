const Sequelize = require("sequelize");

const sequelize = new Sequelize(
 'trouve_ton_artisan',
 'root',
 'root',
  {
    host: 'localhost',
    port: 8889,
    dialect: 'mysql'
  }
);

const connectToDb = async () => {
    
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     })
};

module.exports = {sequelize, connectToDb};