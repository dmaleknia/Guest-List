require('dotenv').config();

module.exports = {
  development: {
   client: 'postgresql',
   connection: process.env.DB_URI
 },

  staging: {
    client: 'postgresql',
    connection: process.env.DB_URI
  },

  production: {
    client: 'postgresql',
    connection: process.env.DB_URI
  }
};