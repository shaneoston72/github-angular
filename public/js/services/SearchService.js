userApp.service('SearchService', ['$http', function($http) {

  this.getUser = function(username) {

    return $http({
      url: "/user",
      method: 'GET',
      params: {user_name: username}
      })
      .then(function(response) {
        return response.data;
      })
      ;
  };
}]);
