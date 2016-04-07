module.exports = function() {
  this.Given(/^I am on the website homepage$/, function () {
    client.url('www.example.com');
  });

  this.When(/^I click the login button$/, function () {
    client.click('.navbar__link--login');
  });

  this.Then(/^I see the login screen$/, function () {
    client.waitForExist('.login-overlay');
  });

  this.Then(/^I enter my username in the email field$/, function () {
    client.setValue('#username', 'test@example.com');
  });

  this.Then(/^I enter my password in the password field$/, function () {
    client.setValue('#password', 'test');
  });

  this.Then(/^And I click the login button$/, function () {
    client.execute("document.getElementsByClassName('login-overlay')[0].style.display = 'none';");
    client.timeoutsImplicitWait(1000);
    client.click('#login');
  });

};