require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';
const configuration = require(__dirname + '/../../knexfile.js')[environment];
const knex = require('knex')(configuration);

knex.schema.dropTableIfExists('events');
.then(() => {
  knex.schema.createTable('events', (table) => {
    table.increments('id');
    table.string('name');
    table.string('location');
    table.string('date');
    table.string('startTime');
    table.string('endTime');
    table.timestamps();
  })
})
.then(() => {
  console.log('created events table');
})
.error((error) => {
  console.error(error);
})