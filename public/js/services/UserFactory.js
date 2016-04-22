userApp.factory('UserFactory', function(){
  var User = function(userData){
    this.login = userData.login;
    this.avatar_url = userData.avatar_url;
    this.html_url = userData.html_url;
    this.public_repos = userData.public_repos;
    this.number_followers = userData.number_followers;
  };
  return User;
});
