var UserInfo = require('../src/userinfo.js');

module.exports = function(app) {

  app.get("/api/userinfo", function(req, res, username) {
    var userinfo = new UserInfo();

    var githubResponse = userinfo.requestToGitHub(username);

    if (!!gitHubResponse.message) {
      res.send(err);
    }
    else {
      res.json(gitHubResponse);
      console.log(gitHubResponse);
    }
  });


  app.get('/', function(req, res) {
    var path = require('path');
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });
};
