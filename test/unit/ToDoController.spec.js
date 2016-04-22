describe('UsersController', function() {
  beforeEach(module('toDoApp'));
  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('UsersController');
  }));

  it('initialises with a users array of 4 people', function() {
    expect(ctrl.users.length).toEqual(4);
  });
});
