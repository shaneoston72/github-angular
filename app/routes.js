module.exports = function(app) {
  var request = require('request');
  var UserInfo = require('./userInfo.js');

  app.get("/user", function(req, res) {
    var username = req.query.user_name;
    var userinfo = new UserInfo();

    userinfo.requestToGitHub(username)
    .then(function(userData) {
      return res.send(userData);
    });
  });

  app.get('/', function(req, res) {
    var path = require('path');
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });
};
