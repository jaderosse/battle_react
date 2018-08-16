var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var io = require('socket.io')();

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.use('/index', require('./routes/index'));

app.get('*', function(req, res, next) {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(3000);
io.listen(3000);

module.exports = app;