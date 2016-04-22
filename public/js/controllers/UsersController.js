userApp.controller('UsersController', function() {

  var self = this;

  self.users = [simon,nick,shane,misa];


  self.addUser = function(userData){
    self.users.push(new UserFactory(userData));
    
  };
});












// controller.prototype.addUser = function() {
//   this.users.push(user)
// }
