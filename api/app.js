const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testAPIRouter = require('./routes/testAPI');
const tmntRouter = require('./routes/tmnt');
const raphaelRouter = require('./routes/raphael');
const donatelloRouter = require('./routes/donatello');
const leonardoRouter = require('./routes/leonardo');
const michelangeloRouter = require('./routes/michelangelo');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);
app.use('/tmnt', tmntRouter);
app.use('/raphael', raphaelRouter);
app.use('/donatello', donatelloRouter);
app.use('/leonardo', leonardoRouter);
app.use('/michelangelo', michelangeloRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log("Server-side API is listening on: port:9000");

module.exports = app;
