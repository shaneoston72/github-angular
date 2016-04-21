var appRouter = function(app) {

  app.get("/", function(req, res) {
    res.send("Hello World");
  });

  app.get("/userinfo", function(req, res) {
    var request = require('request');

    var options = {
      url: 'https://api.github.com/users/MisaOgura',
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
      console.log(frontendData);
    }
  });
}

module.exports = appRouter;
