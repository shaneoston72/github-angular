describe('UserFactory', function() {
  beforeEach(module('userApp'));


  var user;

  var simon = {
    "login": "SimonGlancy",
    "avatar_url": "https://avatars.githubusercontent.com/u/16765235?v=3",
    "html_url": "https://github.com/SimonGlancy",
    "public_repos": 32,
    "number_followers": 5
  };


  beforeEach(inject(function(UserFactory){
    user = new UserFactory(simon);

  }));

  it('has a login name', function(){
    expect(user.login).toBe(simon.login);
  });

  it('has an avatar', function(){
    expect(user.avatar_url).toBe(simon.avatar_url);
  });

  it('has a user link', function(){
    expect(user.html_url).toBe(simon.html_url);
  });

  it('shows public repos', function(){
    expect(user.public_repos).toBe(simon.public_repos);
  });

  it('shows user folowers', function(){
    expect(user.number_followers).toBe(simon.number_followers);
  });


});
