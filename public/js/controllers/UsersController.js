userApp.controller('UsersController', ['SearchService','UserFactory', function(SearchService, UserFactory) {

  var self = this;

  self.users = [misa,nick,shane,simon];

  self.search = function(username) {
    SearchService.getUser(username)
      .then(function(userData){
      return self.users.push(new UserFactory(userData));
    });
  };
}]);
