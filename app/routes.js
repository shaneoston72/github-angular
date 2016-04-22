var UserInfo = require('../src/userinfo.js');

module.exports = function(app) {


  app.get("/api/userinfo", function(req, res) {
    var request = require('request');

    var options = {
      url: 'https://api.github.com/users/shaneoston72?client_id=05d7cca7933ca20904c9&client_secret=a33d9a9dd9eb1cf1e1025c1a012a724961c2ce24',
      headers: {
        'User-Agent': 'request'
      }
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        parsedData(info);
      }
    }
    request(options, callback);

    function parsedData(info) {
      var frontendData = {};
      frontendData.login = info.login;
      frontendData.avatar_url = info.avatar_url;
      frontendData.url = info.html_url;
      frontendData.login = info.login;
      frontendData.repos = info.public_repos;
      frontendData.followers = info.followers;
      res.send(frontendData);
    }
  });


  app.get('/', function(req, res) {
    var path = require('path');
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });
};
