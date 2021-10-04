let express = require("express");
let app = express();


//var app = require('express')();
//var app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);


var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const contact = require('./models/contact');
var path = require('path');

app.use(bodyParser.json())
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));


app.set('view engine','ejs');

const URI = "mongodb+srv://HamzaAkram:Hamza123@cluster0.1plbq.mongodb.net/MyWeb?retryWrites=true&w=majority";
mongoose.connect(URI, { useUnifiedTopology:true})
.then((result)=>console.log('Connected to the database'))
.catch((err)=> console.log(err))
var db = mongoose.connection;
db.once('open',()=>console.log("Connected to database"));
app.post('/contact-us',(req,res)=>{
  const Contact = new contact({
     Name : ""+req.body.Name,
     Email : ""+req.body.Email,
     Message : ""+req.body.Message
  });
  Contact.save()/*
  .then((result)=> ({
      res.send(result)
  })
  .catch((err)=>{
      console.log(err)
  })
})*/
})




var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get("/test", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});


//socket test
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
  }, 1000);

});


http.listen(port,()=>{
  console.log("Listening on port ", port);
});

//this is only needed for Cloud foundry 
require("cf-deployment-tracker-client").track();
