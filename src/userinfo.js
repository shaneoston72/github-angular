var request = require('request');
var username = 'MisaOgura';

function UserInfo() {}

UserInfo.prototype.requestToGitHub = function(username) {

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
    res.send(frontendData);
  }
};

// var testUser = 'MisoOgura';
//
// // UserInfo.prototype.requestOptions = function(testUser) {
//   // var options = {
//   //   url: 'https://api.github.com/users/' + testUser,
//   //   headers: {
//   //     'User-Agent': 'request'
//   //   }
//   // };
// // };
// UserInfo.prototype._callback = function(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     var info = JSON.parse(body);
//     _parsedData(info);
//   }
// };
//
// UserInfo.prototype.requestToGitHub = function(testuser){
//   var options = {
//     url: 'https://api.github.com/users/' + testUser,
//     headers: {
//       'User-Agent': 'request'
//     }
//   };
//
//
//   request(options, _callback());
// };
//
// UserInfo.prototype._parsedData = function(info) {
//   var frontendData = {};
//
//   frontendData.login = info.login;
//   frontendData.avatar_url = info.avatar_url;
//   frontendData.url = info.html_url;
//   frontendData.login = info.login;
//   frontendData.repos = info.public_repos;
//   // res.send(frontendData);
// };

module.exports = UserInfo;
