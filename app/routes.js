var UserInfo = require('../src/userinfo.js');

module.exports = function(app) {

  app.get("/api/userinfo", function(req, res) {
    Userinfo.find(function(err, userinfo) {
      if (err)
        res.send(err);

      res.json(userinfo);
    });
  });

  app.get('/', function(req, res) {
    var path = require('path');
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });
};
