require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 710;

const environment = process.env.NODE_ENV || 'development';
const configuration = require(__dirname + '/../../knexfile.js')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(process.env.PORT, () => console.log(`App listening on port ${port}!`));

module.exports = app;