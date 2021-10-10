const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

async function initServer() {
  const port = process.env.PORT || 8080;
  // const mongoURI = 'mongodb+srv://HamzaAkram:Hamza123@cluster0.1plbq.mongodb.net/MyWeb?retryWrites=true&w=majority';
  const mongoURI = 'mongodb+srv://HamzaAkramDeakin:2LRPNh1uUusJh6tJ@cluster0.nc462.mongodb.net/MegaCons?retryWrites=true&w=majority';
  const app = express();
  const server = http.createServer(app);

  // Express middlewares
  app.use(express.static(__dirname + '/assets'));
  app.use(express.static(__dirname + '/views'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Open MongoDB connection
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Database connected');

  // Routes
  app.use('/api/services', require('./routes/services'));
  app.use('/api/contact', require('./routes/contact'));
  app.use('/api/customer', require('./routes/customer'));

  // Start the server
  server.listen(port, function () {
    console.log('Listening on port', port);
  });
}

initServer().catch((ex) => {
  console.log(ex.message);
});
