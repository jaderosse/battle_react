var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var axios = require('axios');
var http = require('http');
var app = express();
var socketIO = require('socket.io');

var server = http.createServer(app);
var io = socketIO(server);
var port = process.env.PORT || 4001;

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.use('/index', require('./routes/index'));

app.get('*', function(req, res, next) {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});



io.on("connection", socket => {
	console.log("new client connected")
  	socket.on("cell value", (val, col) => {
  		io.sockets.emit("change per val", {val: val, col: col});	
  	})
  	socket.on("disconnect", () => {
  		console.log("user disconnect");
  	})
});


server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;