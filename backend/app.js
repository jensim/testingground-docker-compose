#!/usr/bin/env node

const express = require('express');
const app = express();
const path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var BlogPost = new Schema({
  author    : ObjectId,
  title     : String,
  body      : String,
  date      : Date
});
var BlogModel = mongoose.model('BlogPost', BlogPost);

app.get('/add', function (req, res) {
  var instance = new BlogModel()
  instance.title = 'herro'
  instance.date = new Date()
  instance.body = 'oooh lok at dat bodi'
  instance.save(function(err){
    if(err) res.send(err)
    else res.send('all goooood')
  })
})

app.get('/read', function (req, res) {
  BlogModel.find({}, function (err, docs) {
    if(err) res.send(err)
    else res.send(docs)
  });
})

app.use('/', express.static(path.join(__dirname, 'public')))

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
