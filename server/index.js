var express = require('express');

var app = express();

app.use(express.static(__dirname + './../dist'));

app.get('/', function (req, res) {
  res.send(JSON.stringify({}));
})

app.listen(3000);
