userApp.controller('UsersController', ['SearchService','UserFactory', function(SearchService, UserFactory) {

  var self = this;

  self.users = [];

  self.search = function(username) {
    console.log('Hello');
    SearchService.getUser(username)
      .then(function(userData){
      console.log('inside');
      return self.users.push(new UserFactory(userData));
    });
  };
}]);
