var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require('path');
var routes = require("./app/routes.js")(app);
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port);

console.log('Listening on port ' + port);

exports = module.exports = app;
