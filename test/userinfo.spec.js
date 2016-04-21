var chai = require('chai');
var expect = chai.expect;
var UserInfo = require('../src/userInfo.js');

describe('UserInfo', function() {
  it('says hello world!', function() {
    var userInfo = new UserInfo();
    // expect(userInfo).to.be.an.instanceof(UserInfo);
    expect(userInfo.testFunction()).to.equal('Hello World!');
  });
});
