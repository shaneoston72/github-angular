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
        console.log(info);
        // console.log(info.followers_url);
      }
    }

    request(options, callback);
  });

  app.get("/", function(req, res) {
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
        console.log(info);
        // console.log(info.followers_url);
      }
    }

    request(options, callback);
  });
}

module.exports = appRouter;
