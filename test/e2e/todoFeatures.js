describe('Todos tracker', function() {
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Github Grabber');
  });

  it('has a title', function() {
    browser.get('/');
    var users = $$('#attribute-container');
    expect(users.first().getText()).toEqual('SimonGlancy\nRepos: 32\nFollowers: 5');
    expect(users.last().getText()).toEqual('MisaOgura\nRepos: 44\nFollowers: 6');
  });

});
