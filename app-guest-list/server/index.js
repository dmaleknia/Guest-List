require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const moment = require('moment');

const app = express();
const port = 711;

const environment = process.env.NODE_ENV || 'development';
const configuration = require(__dirname + '/../../knexfile.js')[environment];
const knex = require('knex')(configuration);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`));

app.get('/events', (req, res) => {
  knex('events').select()
    .then((events) => {
      res.status(200).json(events);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
})

app.post('/events', (req, res) => {
  knex('events')
    .insert({
      name: req.body.name,
      location: req.body.location,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      created_at: moment().format('LLLL'),
      updated_at: moment().format('LLLL')
    })
    .then((data) => {
      console.log(data);
      res.status(200);
    })
    .catch((error) => {
      res.status(500).json({ error });
    })
})

app.post('/rsvps', (req, res) => {
    // console.log(req);
      // knex('events')
      //   .insert({
      //     name: req.body.name,
      //     location: req.body.location,
      //     date: req.body.date,
      //     startTime: req.body.startTime,
      //     endTime: req.body.endTime,
      //     created_at: moment().format('LLLL'),
      //     updated_at: moment().format('LLLL')
      //   })
      //   .then(() => {
      //     res.status(200);
      //   })
      //   .catch((error) => {
      //     res.status(500).json({
      //       error
      //     });
      //   })
})

module.exports = app;