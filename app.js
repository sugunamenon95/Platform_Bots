var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);



var Bot = require('telegram-api').default;
var Message = require('telegram-api/types/Message');
var File = require('telegram-api/types/File');

var bot = new Bot({
  token: '199821919:AAFIAnWSxh6NonuRLuBU01sL3U6XXHXwN_4'

});

bot.start();

bot.get(/Hi|Hey|Hello|Yo/, function(message) {
  var answer = new Message().text('Hello, Sir').to(message.chat.id);

  bot.send(answer);
});

bot.command('start', function(message) {
  var welcome = new File().file('./some_photo.png').caption('Welcome').to(message.chat.id);

  bot.send(welcome);
});

// Arguments, see: https://github.com/mdibaiee/node-telegram-api/wiki/Commands
bot.command('weather <city> [date]', function(message) {
  console.log(message.args.city, message.args.date);
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
