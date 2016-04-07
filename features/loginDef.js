module.exports = function() {
  this.Given(/^I am on the Weebly homepage$/, function () {
    client.url('https://www.weebly.com');
  });

  this.When(/^I click the login button$/, function () {
    client.click('.navbar__link--login');
  });

  this.Then(/^I see the login screen$/, function () {
    client.waitForExist('.login-overlay');
  });

  this.Then(/^I enter my username in the email field$/, function () {
    client.setValue('#weebly-username', 'daniela.h@weebly.com');
  });

  this.Then(/^I enter my password in the password field$/, function () {
    client.setValue('#weebly-password', 'weebly');
  });

  this.Then(/^And I click the login button$/, function () {
    client.execute("document.getElementsByClassName('login-overlay')[0].style.display = 'none';");
    client.timeoutsImplicitWait(1000);
    client.click('#weebly-login');
  });

};