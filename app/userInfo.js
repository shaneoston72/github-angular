var request = require('request');

module.exports = function UserInfo() {

  UserInfo.prototype.requestToGitHub = function(username) {

    var options = {
      url: 'https://api.github.com/users/' + username + '?client_id=05d7cca7933ca20904c9&client_secret=a33d9a9dd9eb1cf1e1025c1a012a724961c2ce24',
      headers: {
        'User-Agent': 'request'
      }
    };

    return new Promise(function(resolve, reject) {
      request(options, function(error, response, body) {
        if (error) return reject(error);
        if (response.statusCode !== 200) return reject(new Error(body));
        if (!error && response.statusCode == 200) {
          var rawInfo = JSON.parse(body);
          resolve(_parsedData(rawInfo));
        }
      });
    });

    function _callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var rawInfo = JSON.parse(body);
        return _parsedData(rawInfo);
      }
    }

    function _parsedData(info) {
      var frontendData = {};
      frontendData.login = info.login;
      frontendData.avatar_url = info.avatar_url;
      frontendData.html_url = info.html_url;
      frontendData.public_repos = info.public_repos;
      frontendData.number_followers = info.followers;
      return frontendData;
    }
  };
};
