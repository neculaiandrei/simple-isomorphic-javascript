var express = require('express');
var Hello = require('./hello');

var app = express();
var publicDirectory = __dirname + '/public';

app.use(express.static(publicDirectory, { index: '_' }));

app.use('/favicon.ico', function (req, res){
    res.sendStatus(204);
});

app.use('/', function (req, res) {
    Hello();
    res.sendFile('index.html', { root: publicDirectory });
});

app.listen('11001', () => console.log('Running on 11001...'));