var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')

var index = require('./routes/index')
var posts = require('./routes/posts')

var app = express();

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/selldisshit';

var mongoDB_config = {
  development: 'mongodb://localhost/selldisshit_dev',
  test: 'mongodb://localhost/selldisshit_test'
}

var app_env = app.settings.env;

mongoose.connect(mongoDB_config[app_env], (err, res) => {
  console.log('Connected to DB: ' + mongoDB_config[app_env] );
});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/', index);
app.use('/api/posts/', posts)

app.listen(3000, () => {
  console.log('App is listening on port 3000')
})

module.exports = app;
