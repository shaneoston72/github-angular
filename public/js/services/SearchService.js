userApp.service('SearchService', ['$http', function($http) {

  this.getUser = function(username) {

    return $http({
      url: "/api/userinfo",
      method: 'GET',
      params: {user_name: username}
      })
      .then(function(response) {
        console.log(response.data);
        return response.data;
      })
      ;
  };
}]);
