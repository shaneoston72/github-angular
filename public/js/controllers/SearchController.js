toDoApp.controller('SearchController', ['$http', function($http) {

  this.search = function(username) {

    $http({
      url: "/api/userinfo",
      method: 'GET',
      params: {user_name: username}
      })
      .success(function(success) {
        console.log(success);
        // factory call to deal with data
      })
      .error(function(error) {
        console.log(error);
      });


    // $http
    //   .get("/api/userinfo", data)
    //   .success(function(success) {
    //     console.log(success);
    //     // factory call to deal with data
    //   })
    //   .error(function(error) {
    //     console.log(error);
    //   });
  };
}]);
