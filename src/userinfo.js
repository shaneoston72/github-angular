var request = require('request');
var username = 'MisaOgura';

function UserInfo() {}

UserInfo.prototype.requestToGitHub = function(username){
  var options = {
    url: 'https://api.github.com/users/' + username,
    headers: {
      'User-Agent': 'request'
    }
  };

  function callback(error, response, body){
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      parsedData(info);
      console.log("INFO:" + info);
    }
  }

  function parsedData(info) {
    var frontendData = {};
    frontendData.login = info.login;
    frontendData.avatar_url = info.avatar_url;
    frontendData.url = info.html_url;
    frontendData.login = info.login;
    frontendData.repos = info.public_repos;
    return(frontendData);
  }

  request(options, callback);

};


module.exports = UserInfo;
