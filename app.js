var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var axios = require('axios');
var http = require('http');
var app = express();
var io = require('socket.io');

var server = http.createServer(app);
var socket = io(server);
var port = process.env.PORT || 4001;

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.use('/index', require('./routes/index'));

app.get('*', function(req, res, next) {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});



socket.on("connection", socket => {
  console.log("New client connected"), setInterval(
    () => getApiAndEmit(socket),
    10000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});
var getApiAndEmit = async socket => {
  try {
    var res = await axios.get(
      "http://ShakeItSpeare.com/api/sentence"
    );
    socket.emit("FromAPI", res.data);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

app.listen(3000);

server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;