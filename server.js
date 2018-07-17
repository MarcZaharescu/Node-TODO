
// setting up =======================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')


// configuration =====================================================
mongoose.connect('mongodb://<nodetodo>:<password1>mongodb://<dbuser>:<dbpassword>@ds151631.mlab.com:51631/nodotodo')

app.use(express.static(__dirname +'/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended' : 'true'}))
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());


// listen + start the app ============================================
app.listen('9090')
console.log('listening port 9090')

// define model ======================================================

var Todo = mongoose.model('Todo', {
  text: String
});

// todos api ========================================================

//get
app.get('/api/todos', function(req,res){

  Todo.find(function(err,todos) {
    if(err)
      res.send(err)

    res.json(todos);
  });
});


//post
 app.post('/api/todos', function(req, res){

   Todo.create({
     text:req.body.text,
     done:false
   }, function(err, todo){
        if(err)
          res.send(err)

          Todo.find(function(err,todos) {
            if(err)
              res.send(err)

            res.json(todos);
          });
   });
 });

 //delete
 app.delete('/api/todos/:todo_id', function(req,res){
   Todo.remove({
     _id: req.params.todo_id
   }, function(err, todo){
        if(err)
          res.send(err)

          Todo.find(function(err,todos) {
            if(err)
              res.send(err)

            res.json(todos);
          });
   })
 })
