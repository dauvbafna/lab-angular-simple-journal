const express      = require('express');
const logger       = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose     = require('mongoose');
const cors         = require('cors');

const index = require('./routes/index');
const journalentries = require('./routes/api/journal-entries');

const app = express();

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/journal-development', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});


app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}));

app.use(logger('dev'));

app.use(cookieParser());



app.use('/', index);
app.use('/journal-entries', journalentries);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({error: 'not found'});
});

app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500).json({error: 'unexpected'});
  }
});

module.exports = app;
