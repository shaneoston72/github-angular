userApp.controller('UsersController', ['SearchService', function(SearchService) {

  var self = this;

  self.users = [misa,nick,shane,simon];

  self.search = function(username) {
    SearchService.getUser(username)
    .then(function(userData){
    return self.users.push(userData);
    });
  };
}]);
